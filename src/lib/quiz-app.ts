// Quiz state machine (04 §8.1): intro → q1…q10 → result (→ optional email). sessionStorage `dd_quiz_v1` makes
// back/refresh safe. No auto-advance (WCAG 3.2.2). Focus moves to each question's H2 and to the result H2.
import { questions, riskLines, quizCopy as c } from '../content/copy/en/quiz';
import { score, type Answers } from './quiz-score';
import { track } from './analytics';
import { PUBLIC_WEB3FORMS_KEY } from 'astro:env/client';

const KEY = 'dd_quiz_v1';
type State = { step: number; answers: Answers; done?: boolean };
const load = (): State | null => { try { return JSON.parse(sessionStorage.getItem(KEY) ?? 'null'); } catch { return null; } };
const save = (s: State) => { try { sessionStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ } };
const clear = () => { try { sessionStorage.removeItem(KEY); } catch { /* ignore */ } };

export function mountQuiz() {
  const root = document.querySelector<HTMLElement>('[data-quiz]');
  if (!root) return;
  root.hidden = false;
  const $ = <T extends Element = HTMLElement>(sel: string, el: ParentNode = root) => el.querySelector<T>(sel)!;
  const screens = [...root.querySelectorAll<HTMLElement>('[data-screen]')];
  const progressWrap = $('[data-progress-wrap]');
  let state: State = { step: 0, answers: {} };

  const show = (name: string) => {
    screens.forEach((s) => (s.hidden = s.dataset.screen !== name));
    const n = name.startsWith('q') ? Number(name.slice(1)) : 0;
    progressWrap.hidden = n === 0;
    if (n) {
      $('[data-progress-text]').textContent = (root.dataset.progress ?? '').replace('{n}', String(n));
      $('[data-progress-bar]').style.setProperty('inline-size', `${n * 10}%`);
      const form = $(`[data-screen="q${n}"]`);
      const qid = form.dataset.qid!;
      const v = state.answers[qid];
      if (v) form.querySelector<HTMLInputElement>(`input[value="${v}"]`)!.checked = true;
      $('.quiz__q', form).focus();
    }
  };

  const goTo = (n: number) => { state.step = n; save(state); show(n === 0 ? 'intro' : `q${n}`); };

  const renderResult = () => {
    const r = score(questions, state.answers);
    const copy = c.results[r.segment];
    $('[data-r-h2]').textContent = copy.h2;
    $('[data-r-meaning]').textContent = copy.meaning;
    $('[data-r-body]').textContent = copy.body;
    for (const d of r.dimensions) {
      const li = $(`[data-dim="${d.key}"]`);
      $('[data-level]', li).textContent = c.levels[d.level];
      $('.dims__bar span', li).style.setProperty('inline-size', `${Math.round((d.score / d.max) * 100)}%`);
    }
    const risks = $('[data-r-risks]');
    risks.replaceChildren(...r.topRisks.map((id) => Object.assign(document.createElement('li'), { textContent: riskLines[id as keyof typeof riskLines] ?? '' })));
    $('[data-r-risks-wrap]').hidden = r.topRisks.length === 0;
    const urgent = $('[data-r-urgent]');
    urgent.hidden = !(r.segment === 'high_risk' && r.urgent);
    if ('urgency' in copy) urgent.textContent = copy.urgency;

    const type = copy.cta === 'review' ? 'review' : 'clarity';
    const cta = $<HTMLAnchorElement>('[data-r-cta]');
    cta.textContent = type === 'review' ? root.dataset.ctaReview! : root.dataset.ctaClarity!;
    cta.href = root.dataset.bookLive === '1' ? `/book?type=${type}&quiz_segment=${r.segment}` : 'mailto:hello@discoverdev.ai';
    cta.dataset.ctaId = `quiz_result_${type}`; cta.dataset.ctaTier = 'primary'; cta.dataset.ctaPosition = 'result'; cta.dataset.ctaTarget = type;
    root.querySelectorAll<HTMLElement>('[data-r-terms]').forEach((el) => (el.hidden = el.dataset.rTerms !== type));

    const sec = $('[data-r-secondary]');
    sec.replaceChildren(); sec.hidden = true;
    const add = (text: string, href: string, id: string, target: string) => {
      if (!href) return;
      const a = Object.assign(document.createElement('a'), { textContent: text, href });
      a.dataset.ctaId = id; a.dataset.ctaTier = 'secondary'; a.dataset.ctaPosition = 'result'; a.dataset.ctaTarget = target;
      if (sec.childNodes.length) sec.append(document.createTextNode(' '));
      sec.append(a); sec.hidden = false;
    };
    if (r.segment === 'high_risk' && root.dataset.bookLive === '1') add(c.results.high_risk.secondary, `/book?type=clarity&quiz_segment=${r.segment}`, 'quiz_result_clarity', 'clarity');
    if (r.segment === 'rebuild_candidate') { add(c.results.rebuild_candidate.links.validate, root.dataset.validate ?? '', 'quiz_result_validate', 'validate'); add(c.results.rebuild_candidate.links.build, root.dataset.build ?? '', 'quiz_result_build', 'build'); }
    if (r.segment === 'ready_polish') add(c.results.ready_polish.pillarLink, root.dataset.pillar ?? '', 'quiz_result_article', 'article');

    if (!state.done) {
      track('quiz_completed', { segment: r.segment, points_total: r.total, flags_crit: r.crit, flags_rebuild: r.rebuild, built_with: state.answers.built_with, urgent: r.urgent });
      state.done = true; save(state);
    }
    show('result');
    $('[data-r-h2]').focus();
    return r;
  };

  // Intro: resume or start.
  const saved = load();
  if (saved && (saved.step > 0 || saved.done)) { $('[data-resume]').hidden = false; $('[data-start]').hidden = true; }
  $('[data-start]').addEventListener('click', () => { track('quiz_started', { resumed: false }); state = { step: 1, answers: {} }; goTo(1); });
  root.querySelector('[data-resume-go]')?.addEventListener('click', () => { state = saved!; track('quiz_started', { resumed: true }); if (state.done) renderResult(); else goTo(Math.max(1, state.step)); });
  root.querySelector('[data-restart]')?.addEventListener('click', () => { clear(); state = { step: 1, answers: {} }; track('quiz_started', { resumed: false }); goTo(1); });
  $('[data-retake]').addEventListener('click', () => { clear(); state = { step: 0, answers: {} }; $('[data-resume]').hidden = true; $('[data-start]').hidden = false; show('intro'); $<HTMLButtonElement>('[data-start]').focus(); });

  // Questions: Next validates; Back keeps answers. Enter submits the form.
  root.querySelectorAll<HTMLFormElement>('form[data-qid]').forEach((form, i) => {
    const err = $('[data-err]', form);
    form.addEventListener('change', () => { err.hidden = true; form.querySelector('fieldset')!.removeAttribute('aria-invalid'); });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const checked = form.querySelector<HTMLInputElement>('input:checked');
      if (!checked) { err.hidden = false; form.querySelector('fieldset')!.setAttribute('aria-invalid', 'true'); form.querySelector<HTMLInputElement>('input')!.focus(); return; }
      state.answers[form.dataset.qid!] = checked.value;
      track('quiz_question_answered', { question_id: form.dataset.qid, question_index: i + 1 });
      if (i + 1 < questions.length) goTo(i + 2);
      else { state.step = questions.length; save(state); renderResult(); }
    });
    form.querySelector('[data-back]')?.addEventListener('click', () => goTo(i));
  });

  // Optional email step (D-11): Web3Forms, honeypot, consent required, validate on blur, result never gated.
  const ef = root.querySelector<HTMLFormElement>('[data-email-form]');
  if (ef && PUBLIC_WEB3FORMS_KEY) {
    const input = $<HTMLInputElement>('#quiz-email', ef);
    const err = $('[data-email-err]', ef);
    const status = $('[data-email-status]', ef);
    const btn = $<HTMLButtonElement>('[data-email-btn]', ef);
    const validate = () => {
      const v = input.value.trim();
      const msg = !v ? c.email.errEmpty : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : c.email.errFormat;
      err.textContent = msg; err.hidden = !msg;
      if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
      return !msg;
    };
    input.addEventListener('blur', validate);
    input.addEventListener('input', () => { if (input.hasAttribute('aria-invalid')) validate(); });
    ef.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validate()) { input.focus(); return; }
      const consent = ef.querySelector<HTMLInputElement>('input[name="consent"]')!;
      if (!consent.checked) { status.textContent = c.email.errConsent; consent.focus(); return; }
      if ((ef.querySelector<HTMLInputElement>('input[name="botcheck"]')?.value ?? '') !== '') return;
      const r = score(questions, state.answers);
      btn.disabled = true; btn.setAttribute('aria-busy', 'true'); status.textContent = c.email.sending;
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ access_key: PUBLIC_WEB3FORMS_KEY, subject: 'Launch check result', email: input.value.trim(), segment: r.segment, points_total: r.total, consent: true, botcheck: '' }),
        });
        if (!res.ok) throw new Error(String(res.status));
        status.textContent = c.email.success;
        try { sessionStorage.setItem('dd_prefill', input.value.trim()); } catch { /* ignore */ }
        track('quiz_lead_submitted', { segment: r.segment, newsletter_opt_in: false });
      } catch {
        status.textContent = c.email.failed;
      } finally { btn.disabled = false; btn.removeAttribute('aria-busy'); }
    });
  }
}

// Every scoring rule in 03 §4.3 (04 §8.2). Run: node --test tests/unit/ (Node 24+ strips TS types).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { score, level } from '../../src/lib/quiz-score.ts';
import { questions } from '../../src/content/copy/en/quiz.ts';

// Baseline: every question answered with its 0-point first option.
const base = Object.fromEntries(questions.map((q) => [q.id, 'o1']));
const run = (over: Record<string, string>) => score(questions, { ...base, ...over });

test('config matches 03 §4.2: 10 questions, max 19 points', () => {
  assert.equal(questions.length, 10);
  const max = questions.reduce((s, q) => s + Math.max(...q.options.map((o) => o.pts)), 0);
  assert.equal(max, 19);
});

test('rule 4: total 0–4 and no CRIT → ready_polish', () => {
  assert.equal(run({}).segment, 'ready_polish');
  assert.equal(run({ data_rules: 'o2', keys_browser: 'o2' }).segment, 'ready_polish'); // 4 pts
});

test('rule 3: one CRIT → fix_first', () => {
  const r = run({ payments: 'o4' });
  assert.equal(r.crit, 1);
  assert.equal(r.segment, 'fix_first');
});

test('rule 3: total 5–10 without CRIT → fix_first (boundary 5)', () => {
  const r = run({ data_rules: 'o2', keys_browser: 'o2', signup: 'o3' }); // 2+2+1
  assert.equal(r.total, 5);
  assert.equal(r.segment, 'fix_first');
});

test('rule 2: two CRIT → high_risk', () => {
  assert.equal(run({ data_rules: 'o3', keys_browser: 'o3' }).segment, 'high_risk');
});

test('rule 2: total 11+ without CRIT → high_risk', () => {
  const r = run({ data_rules: 'o2', keys_browser: 'o2', signup: 'o4', payments: 'o3', code_access: 'o3', handover: 'o2' }); // 2+2+2+2+2+1 = 11
  assert.equal(r.crit, 0);
  assert.equal(r.total, 11);
  assert.equal(r.segment, 'high_risk');
});

test('rule 1: any REBUILD flag wins over everything', () => {
  assert.equal(run({ code_access: 'o4' }).segment, 'rebuild_candidate');
  assert.equal(run({ handover: 'o4', data_rules: 'o3', keys_browser: 'o3' }).segment, 'rebuild_candidate');
});

test('urgency: launch within 2 weeks or a month with real users', () => {
  assert.equal(run({ launch_when: 'o1', real_users: 'o2' }).urgent, true);
  assert.equal(run({ launch_when: 'o2', real_users: 'o4' }).urgent, true);
  assert.equal(run({ launch_when: 'o1', real_users: 'o1' }).urgent, false); // nobody yet
  assert.equal(run({ launch_when: 'o3', real_users: 'o3' }).urgent, false);
});

test('dimension bands: 0–33% low, 34–66% some, 67–100% high', () => {
  assert.equal(level(0, 8), 'low');
  assert.equal(level(2, 6), 'low'); // 33%
  assert.equal(level(3, 8), 'some'); // 38%
  assert.equal(level(1, 2), 'some'); // 50%
  assert.equal(level(2, 3), 'high'); // 67%
  const r = run({ data_rules: 'o3', keys_browser: 'o3', signup: 'o4' }); // security 8/8
  assert.equal(r.dimensions.find((d) => d.key === 'security')?.level, 'high');
});

test('top risks: highest points first, ties in 03 order (Q4, Q5, Q7, Q8, Q9, Q6, Q10), max 3, only 2+ points', () => {
  const r = run({ operations: 'o3', signup: 'o4', handover: 'o3', payments: 'o4', data_rules: 'o3' });
  assert.deepEqual(r.topRisks, ['data_rules', 'payments', 'handover']);
  assert.deepEqual(run({ signup: 'o3' }).topRisks, []); // 1 point is not a risk line
});

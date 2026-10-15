// Pure quiz scoring (03 §4.3, 04 §8). Unit-tested in tests/unit/quiz-score.test.ts. No DOM, no copy.
export type Segment = 'rebuild_candidate' | 'high_risk' | 'fix_first' | 'ready_polish';
export type Level = 'low' | 'some' | 'high';
export interface ScoreOption { value: string; pts: number; flag?: 'CRIT' | 'REBUILD' }
export interface ScoreQuestion { id: string; options: readonly ScoreOption[] }
export type Answers = Record<string, string>; // questionId -> option value

export interface Result {
  segment: Segment;
  total: number;
  crit: number;
  rebuild: number;
  urgent: boolean;
  dimensions: { key: 'security' | 'payments' | 'code' | 'operations'; score: number; max: number; level: Level }[];
  topRisks: string[]; // question ids, highest points first, ties in the 03 order
}

const DIMENSIONS = [
  { key: 'security', ids: ['data_rules', 'keys_browser', 'signup'], max: 8 },
  { key: 'payments', ids: ['payments'], max: 3 },
  { key: 'code', ids: ['code_access', 'handover'], max: 6 },
  { key: 'operations', ids: ['operations'], max: 2 },
] as const;
const TIE_ORDER = ['data_rules', 'keys_browser', 'payments', 'code_access', 'handover', 'signup', 'operations'];

/** 0–33% of max = low, 34–66% = some, 67–100% = high (03 §4.3). */
export function level(score: number, max: number): Level {
  const pct = max === 0 ? 0 : Math.round((score / max) * 100); // whole percentages, so 2/6 = 33% stays in the 0–33 band
  if (pct <= 33) return 'low';
  if (pct <= 66) return 'some';
  return 'high';
}

export function score(questions: readonly ScoreQuestion[], answers: Answers): Result {
  const picked = new Map<string, ScoreOption>();
  for (const q of questions) {
    const opt = q.options.find((o) => o.value === answers[q.id]);
    if (opt) picked.set(q.id, opt);
  }
  let total = 0, crit = 0, rebuild = 0;
  for (const opt of picked.values()) {
    total += opt.pts;
    if (opt.flag === 'CRIT') crit++;
    if (opt.flag === 'REBUILD') rebuild++;
  }
  // Rules apply in order; the first match sets the segment.
  let segment: Segment;
  if (rebuild > 0) segment = 'rebuild_candidate';
  else if (crit >= 2 || total >= 11) segment = 'high_risk';
  else if (crit === 1 || total >= 5) segment = 'fix_first';
  else segment = 'ready_polish';

  // Urgency: launch within 2 weeks or a month (o1, o2) and real_users is not "Nobody yet" (o1).
  const urgent = ['o1', 'o2'].includes(answers.launch_when ?? '') && !!answers.real_users && answers.real_users !== 'o1';

  const dimensions = DIMENSIONS.map((d) => {
    const s = d.ids.reduce((sum, id) => sum + (picked.get(id)?.pts ?? 0), 0);
    return { key: d.key, score: s, max: d.max, level: level(s, d.max) };
  });

  const topRisks = TIE_ORDER
    .map((id, order) => ({ id, pts: picked.get(id)?.pts ?? 0, order }))
    .filter((r) => r.pts >= 2)
    .sort((a, b) => b.pts - a.pts || a.order - b.order)
    .slice(0, 3)
    .map((r) => r.id);

  return { segment, total, crit, rebuild, urgent, dimensions, topRisks };
}

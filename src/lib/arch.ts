// Keystone arch geometry (06 §0.8 A). Pure build-time maths: Astro renders the polygons into inline SVG, no client JS.
// Stones are voussoirs on a ring; their joints lean off radial at the slant of the arrow mark's blades, mirrored on
// each side, so the keystone (the middle stone) is the widest wedge and stands proud of the ring.
// `sweep` 180 = a half-round arch; less = a segmental arch (wide and shallow, used to frame the home hero scene).

export interface Stone { points: string; course: number; key: boolean; order: number }
export interface Arch { viewBox: string; width: number; height: number; stones: Stone[]; grad: { x1: number; y1: number; x2: number; y2: number } }

const deg = Math.PI / 180;
const fmt = (n: number) => Number(n.toFixed(2));

interface Opts { count?: number; courses?: number; lean?: number; sweep?: number; depth?: number }

/**
 * @param count  odd number of stones; the keystone is the middle one
 * @param courses  how many courses the stones below the keystone are grouped into (the keystone is always the last course)
 * @param depth  ring depth as a share of the outer radius
 */
export function arch({ count = 9, courses = 2, lean = 6, sweep = 180, depth: depthShare = 0.34 }: Opts = {}): Arch {
  if (count % 2 === 0) throw new Error('arch(): stone count must be odd so the keystone sits in the middle');
  const R = 100, depth = R * depthShare, r = R - depth;
  const keyIndex = (count - 1) / 2;
  const keyShare = 1.08; // the keystone gets a little more of the ring than the others
  const start = Math.PI / 2 + (sweep * deg) / 2, end = Math.PI / 2 - (sweep * deg) / 2;
  const unit = (start - end) / (count - 1 + keyShare);
  // Joint angles from the left springing to the right.
  const joints: number[] = [start];
  for (let i = 0; i < count; i++) joints.push(joints[i] - unit * (i === keyIndex ? keyShare : 1));
  joints[count] = end;

  // A joint runs from the inner ring at angle a to the outer ring at a ± lean (leaning away from the crown).
  // The springing joints stay radial so the arch sits square on its supports.
  // Lean is capped at a third of one stone's angle, so a many-stone hero arch keeps the slant without flaring.
  const tilt = Math.min(lean * deg, unit / 3);
  const at = (a: number, rad: number, j: number) => {
    const springing = j === 0 || j === count;
    const side = a > Math.PI / 2 + 1e-6 ? 1 : a < Math.PI / 2 - 1e-6 ? -1 : 0;
    const t = (rad - r) / depth; // 0 on the inner ring, 1 on the outer; extrapolates for the proud keystone
    const ang = springing ? a : a + side * tilt * t;
    return [rad * Math.cos(ang), -rad * Math.sin(ang)] as const;
  };

  const lowerCourse = (i: number) => {
    const fromSpring = Math.min(i, count - 1 - i); // 0 at the springings
    return Math.min(courses, 1 + Math.floor((fromSpring * courses) / keyIndex));
  };

  const stones: Stone[] = [];
  const xs: number[] = [], ys: number[] = [];
  for (let i = 0; i < count; i++) {
    const key = i === keyIndex;
    const outer = key ? R + depth * 0.12 : R;
    const inner = key ? r - depth * 0.06 : r;
    const pts = [at(joints[i], inner, i), at(joints[i], outer, i), at(joints[i + 1], outer, i + 1), at(joints[i + 1], inner, i + 1)];
    for (const [x, y] of pts) { xs.push(x); ys.push(y); }
    stones.push({
      points: pts.map(([x, y]) => `${fmt(x)},${fmt(y)}`).join(' '),
      course: key ? courses + 1 : lowerCourse(i), key,
      order: Math.min(i, count - 1 - i), // laying order: 0 at the springings, keystone last
    });
  }

  // Frame: the bounding box of every stone, with a little air for the mortar stroke.
  const pad = 3;
  const minX = Math.min(...xs) - pad, maxX = Math.max(...xs) + pad, minY = Math.min(...ys) - pad, maxY = Math.max(...ys) + pad;
  return {
    viewBox: `${fmt(minX)} ${fmt(minY)} ${fmt(maxX - minX)} ${fmt(maxY - minY)}`,
    width: fmt(maxX - minX), height: fmt(maxY - minY), stones,
    // The mark's gradient runs lower-left to upper-right (logo SVG, linear-gradient 206,643 → 325,577).
    grad: { x1: fmt(minX), y1: fmt(maxY), x2: fmt(maxX), y2: fmt(minY + (maxY - minY) * 0.2) },
  };
}

// Plays a scene once when it scrolls into view (06 §9.6). Each element matching `selector` gets `arm` set at once
// (so CSS can show the start state), then `play(el)` runs the first time `threshold` of it is visible. With reduced
// motion or without IntersectionObserver nothing is armed, so the finished state shows.
export function playOnce(selector: string, threshold: number, arm: string, play: (el: HTMLElement) => void) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    el.setAttribute(arm, '');
    const io = new IntersectionObserver((es) => {
      if (!es.some((e) => e.isIntersecting)) return;
      io.disconnect();
      play(el);
    }, { threshold });
    io.observe(el);
  });
}

// 03-copy.md §9 (/work) and §10 (case study), anonymized per §0.7 (V12, [CONSENT], G-07). No client names or quotes.
import { shared } from './shared';
export const work = {
  seo: {
    title: 'Case Studies: MVPs, Marketplaces & AI Apps | DiscoverDev',
    description: 'Products we took from idea or prototype to production: EdTech AI agents with 60–90% lower AI costs, AR e-commerce, embedded data and ML teams.',
  },
  h1: 'Products we helped ship',
  intro: 'From AI agents to marketplaces, for founders and teams on 4 continents. Each case shows the problem, what we did and what changed.',
  band: { title: 'Want results like these for your product?', link: shared.reviewStartLink },
};

export const caseStudy = {
  seo: {
    title: 'EdTech AI Agents: Cutting AI Costs 60–90% | DiscoverDev',
    description: 'Caption-first ingestion, cross-user caching, model routing and token trimming cut an EdTech platform’s AI costs by 60–90%. What we changed and why.',
  },
  crumb: 'EdTech AI platform',
  h1: 'Three AI agents for an EdTech platform',
  body: 'An EdTech company in Egypt. We built three AI agents for its learners and teams, then cut the cost of running them by 60–90%.',
  metric: { value: '60–90%', label: 'lower AI cost' },
  updated: { label: 'Updated', date: 'October 16, 2026', iso: '2026-10-16' },
  snapshot: {
    title: 'Snapshot',
    rows: [
      { k: 'Client', v: 'EdTech AI platform (name withheld)' },
      { k: 'Industry', v: 'EdTech' },
      { k: 'Region', v: 'Egypt' },
      { k: 'What we built', v: 'Three AI agents' },
      { k: 'Services', v: 'AI and ML, AI agents, software development' },
      { k: 'Stack', v: 'Python, OpenAI, LangChain, RAG, Whisper, YouTube API, Node.js' },
    ],
  },
  summary: {
    title: 'How did this platform cut its AI costs by 60–90%?',
    answer: 'We changed how the agents read and reuse content. They use video captions before paying for transcription, reuse results across users instead of recomputing them, send each task to the model and provider that fits it, and trim what goes into each prompt. Together these cut AI costs by 60–90%, and cached content now costs close to nothing.',
  },
  challenge: {
    title: 'The challenge',
    body: 'The platform wanted AI agents that help students learn and help the team support them: answer questions, turn videos into lessons and quizzes, and guide each learner. AI that does this well can also be expensive to run, because every video and every question calls a model. The agents had to be practical and scalable, with running costs that stayed under control as usage grew.',
  },
  built: {
    title: 'What we built',
    items: [
      { lead: 'Support chatbot:', text: 'answers student and user questions using the platform’s content (retrieval-augmented generation, or RAG: the model looks up the right content before it answers).' },
      { lead: 'Video-to-lesson and quiz generator:', text: 'turns a video into a structured lesson and a quiz.' },
      { lead: 'Student learning assistant:', text: 'helps each learner work through the material.' },
    ],
  },
  approach: {
    title: 'The five changes that cut cost',
    items: [
      { title: 'Captions first', body: 'Many videos already have captions. The agents use those first, and only transcribe audio when there are none. Transcription is paid work, so skipping it where possible saves money on every video.' },
      { title: 'Reuse across users', body: 'When one student’s request has already been processed, the next student gets the saved result instead of a new model call. Content that’s already cached costs close to nothing to serve again.' },
      { title: 'The right model for each task', body: 'Not every task needs the largest model. Each task goes to a model and provider that fits it, so the larger models are used where they are needed.' },
      { title: 'Shorter prompts', body: 'AI providers charge by the amount of text sent and received. We trimmed what goes into each request to what the model actually needs.' },
      { title: 'Faster transcription', body: 'When audio does need transcribing, long files are split into chunks and transcribed with Whisper in parallel.' },
    ],
  },
  results: {
    title: 'The results',
    items: ['60–90% lower AI cost', 'Cached content served at close to zero marginal cost', 'Three AI agents in production'],
    link: { label: 'How Scale works: a team that stays with your product', to: 'scale' as const }, // 03 §0.8
  },
  cta: { title: 'AI costs too high?', body: 'If your AI bill grows faster than your users, we can look at where the cost goes and what to change.' },
};

// Arabic for en/projects.ts (context/03-copy-ar.md §6). The project list, screens and order come from the English module;
// only the words change here, keyed by id, so a project can never exist in one language and not the other.
import { projects as enProjects, chapters as enChapters, showcase as enShowcase, chapterCopy as enChapterCopy, type Project, type Chapter } from '../en/projects';
import type { Widen } from '../types';
import { shared } from './shared';

type Words = Pick<Project, 'industry' | 'title' | 'did'> & Partial<Pick<Project, 'where' | 'brief' | 'result'>> & { metricLabel?: string; screenAlt?: string };
const words: Record<string, Words> = {
  'edtech-agents': { industry: 'تقنيات التعليم', where: 'مصر', title: 'وكلاء ذكاء اصطناعي لـ EduLens، منصة تعليمية', brief: 'كان كل طلب يُعالج من البداية، فارتفعت تكلفة الذكاء الاصطناعي مع كل طالب جديد.', did: 'الترجمة النصية أولًا، وإجابات مشتركة بين المستخدمين، والنموذج المناسب لكل مهمة.', result: 'خفّضت EduLens تكلفة الذكاء الاصطناعي بنسبة 60 إلى 90%، حسب مدى إعادة استخدام المحتوى، وأصبحت التكلفة تنمو أبطأ من عدد المستخدمين.', metricLabel: 'تكلفة ذكاء اصطناعي أقل' },
  'ar-commerce': { industry: 'تجارة إلكترونية', where: 'السعودية', title: 'NJWAR، متجر Athkado للأثاث بالواقع المعزز وتوصيات بالذكاء الاصطناعي', did: 'دراسة سوق، واكتشاف المنتج، وتصميم تجربة المستخدم، والتطوير، ومحرك توصيات بالذكاء الاصطناعي، وعرض بالواقع المعزز.', screenAlt: 'صفحة منتج في متجر NJWAR بالعربية' },
  'yawmy-care': { industry: 'رعاية الأطفال · منتجنا', title: 'Yawmy Care، منصة لإدارة الحضانات', did: 'منصة واحدة لأولياء الأمور والمعلمين والإدارة، مع الفواتير وتعدد الفروع. بنيناها منتجًا خاصًا بنا يمكن تقديمه بعلامة العميل.', result: 'الإطلاق في 2027.', screenAlt: 'لوحة تحكم Yawmy Care' },
  'home-services': { industry: 'سوق خدمات', where: 'الولايات المتحدة', title: 'Rushr، سوق للخدمات المنزلية', brief: 'منتج جديد لحجز فنيين موثّقين للخدمات المنزلية.', did: 'فريق منتج كامل لمدة 16 أسبوعًا: نشر الطلب، ومطابقة تلقائية مع أقرب مقاول موثّق، ودفع عبر حساب ضمان في Stripe، ومحادثة فورية، وأدوات إدارة.', screenAlt: 'تطبيق Rushr يعرض سباكًا مطابقًا مع خياري القبول والرفض' },
  'health-app': { industry: 'تقنيات صحية', title: 'BioBank، تطبيق صحي يشرح نتائج التحاليل', did: 'شرح نتائج التحاليل بلغة بسيطة، وتوصيات، ومتابعة بالمحادثة، وضوابط سلامة طبية.' },
  'call-ops': { industry: 'وكلاء ذكاء اصطناعي', where: 'الولايات المتحدة', title: 'وكلاء ذكاء اصطناعي لعمليات الاتصال في Nile Support', did: 'وكلاء ذكاء اصطناعي لعمليات الاتصال، وصفحة هبوط، وتعزيز الفريق.' },
  'support-agent': { industry: 'أتمتة الدعم', title: 'وكيل ذكاء اصطناعي لدعم العملاء', brief: 'كان كثير من المستخدمين يسألون السؤال نفسه في الوقت نفسه، وكل طلب يدفع ثمن استدعاء ذكاء اصطناعي خاص به.', did: 'ذاكرة مؤقتة تجيب عن الأسئلة المتطابقة مرة واحدة وتشارك النتيجة.', result: 'أصبحت تكلفة الذكاء الاصطناعي تتبع الأسئلة المختلفة، لا إجمالي الطلبات.' },
  'white-label': { industry: 'شركة برمجيات', where: 'المملكة المتحدة', title: 'مواقع وتطبيقات جوال بعلامة Amstadd', did: 'مواقع وتطبيقات جوال سُلّمت بعلامة شركة برمجيات.' },
  'lms-team': { industry: 'تعلّم للشركات', where: 'المملكة المتحدة', title: 'فريق منتج مدمج لـ Upscend، منصة تعلّم للشركات', did: 'مدير منتج وفريق هندسي مخصصان يديران خارطة الطريق والمهام والسبرنتات لمدة 12 شهرًا.', result: 'يدعم نمو المنصة لدى الشركات في الولايات المتحدة والمملكة المتحدة.', metricLabel: 'شهرًا، فريق واحد' },
  'edtech-data': { industry: 'تقنيات التعليم', where: 'مصر', title: 'بيانات وتعلم آلي لـ Pyramakerz، منصة تعليمية تضم أكثر من 20,000 طالب', did: 'تحليل بيانات، وتعلم آلي، وأتمتة، وهندسة بيانات.' },
  'ride-ml': { industry: 'التنقل', where: 'السعودية', title: 'فريق بيانات وتعلم آلي لـ Arheb، منصة تنقل تشاركي ذكية', brief: 'أول منصة تنقل تشاركي ذكية في السعودية.', did: 'فريق بيانات وتعلم آلي مدمج.' },
  'procurement-ml': { industry: 'مشتريات المطاعم', where: 'السعودية', title: 'مهندس تعلم آلي لمشتريات المطاعم في Jumlaty', did: 'مهندس تعلم آلي انضم إلى الفريق لمدة 3 أشهر.' },
  'feasibility': { industry: 'اكتشاف المنتج', where: 'السعودية', title: 'سبرنتات جدوى لـ Athkado لعدة أفكار ناشئة', did: 'دراسات سوق سريعة وسبرنتات جدوى.', result: 'قرار لكل فكرة: البناء، أو تغيير الاتجاه، أو التأجيل.' },
  'sports-gtm': { industry: 'الرياضة', where: 'من إيطاليا إلى مصر', title: 'خطة دخول السوق لـ Fantacalcio', brief: 'دخول السوق المصري.', did: 'بحث سوق وخطة دخول السوق.' },
  'demand-test': { industry: 'دراسة سوق', title: 'اختبار الطلب لـ Zest قبل البناء', did: 'دراسة سوق وتحليل لآراء الجمهور.' },
  'founders': { industry: 'مؤسسون', where: shared.foundersWhere, title: 'اكتشاف المنتج لمؤسسين أفراد', did: shared.projectFoundersDid },
  'tourism': { industry: 'السياحة والضيافة', where: 'الكويت', title: 'بحث سوق لشركة استشارية', did: 'بحث سوق في السياحة والضيافة.' },
};

export const projects: readonly Project[] = enProjects.map((p) => {
  const w = words[p.id];
  if (!w) throw new Error(`[i18n] missing Arabic words for project "${p.id}"`);
  const { metricLabel, ...rest } = w;
  return { ...p, ...rest, ...(p.metric ? { metric: { value: p.metric.value, label: metricLabel ?? p.metric.label } } : {}) };
});

const chapterWords: Record<string, Pick<Chapter, 'tags' | 'line'> & { note?: string; webAlt?: string; phoneAlts: string[]; tryLabel?: string }> = {
  njwar: { tags: ['البناء', 'تجارة إلكترونية', 'السعودية'], line: 'متجر أثاث بالواقع المعزز: ضع القطعة في غرفتك بحجمها الحقيقي، وغيّر لونها، وأدِرها، وأضف غيرها.', note: 'المتجر على الويب، والواقع المعزز على الجوال. على الجوال، يضع النموذج قطعة أثاث في غرفتك. النموذج يستخدم علامة تجارية تجريبية.', webAlt: 'الصفحة الرئيسية لمتجر NJWAR بالعربية، تدعو المتسوقين لتجربة الأثاث في منازلهم', phoneAlts: ['عرض الواقع المعزز في NJWAR على الجوال: كرسي في غرفة مع أدوات اللون والتدوير'], tryLabel: 'جرّب نموذج الواقع المعزز' },
  yawmy: { tags: ['البناء', 'رعاية الأطفال', 'منتجنا'], line: 'منصتنا لإدارة الحضانات: للإدارة والمعلمين وأولياء الأمور، مع الفواتير وتعدد الفروع.', note: 'لوحة الإدارة على الويب، وتطبيق أولياء الأمور على الجوال.', webAlt: 'لوحة تحكم Yawmy Care مع الإجماليات ورسم بياني للحضور اليومي', phoneAlts: ['تطبيق أولياء الأمور في Yawmy Care: حضور اليوم والجدول', 'تطبيق أولياء الأمور في Yawmy Care: السجل اليومي للمزاج والوجبات والقيلولة'] },
  rushr: { tags: ['البناء', 'سوق خدمات', 'الولايات المتحدة'], line: 'سوق للخدمات المنزلية: انشر طلبك، ويصلك أقرب فني موثّق، وادفع عبر حساب ضمان.', phoneAlts: ['تطبيق Rushr يبحث عن فني قريب', 'تطبيق Rushr يعرض سباكًا مطابقًا مع خياري القبول والرفض', 'طلب في Rushr قيد التنفيذ مع التكلفة الحالية'] },
  upscend: { tags: ['التوسع', 'تعلّم للشركات', 'المملكة المتحدة'], line: 'منصة تعلّم بالذكاء الاصطناعي مع معلم ذكي ومولّد اختبارات ونقاط تحقق في الفيديو. أدار فريقنا المخصص خارطة طريقها ومهامها وسبرنتاتها لمدة 12 شهرًا.', webAlt: 'المعلم الذكي في Upscend: متعلم يتحدث مع المساعد عن دورة', phoneAlts: [] },
};

export const chapters: readonly Chapter[] = enChapters.map((c) => {
  const w = chapterWords[c.id];
  if (!w) throw new Error(`[i18n] missing Arabic words for chapter "${c.id}"`);
  return {
    ...c, tags: w.tags, line: w.line, ...(w.note ? { note: w.note } : {}),
    ...(c.web ? { web: { file: c.web.file, alt: w.webAlt ?? c.web.alt } } : {}),
    phones: c.phones.map((ph, i) => ({ file: ph.file, alt: w.phoneAlts[i] ?? ph.alt })),
    ...(c.tryIt ? { tryIt: { href: c.tryIt.href, label: w.tryLabel ?? c.tryIt.label } } : {}),
  };
});

export const showcase: Widen<typeof enShowcase> = {
  caseLink: 'اقرأ دراسة الحالة',
  partnersLink: 'اعرف المزيد عن الشراكة',
  allLink: 'كل أعمالنا',
  ids: enShowcase.ids,
  hint: 'مرّر جانبيًا أو استخدم الأسهم',
  moreTitle: 'أعمال مختارة',
  othersTitle: 'منتجات أخرى ساعدنا في بنائها',
  labels: { brief: 'المهمة', did: 'ماذا فعلنا', result: 'النتيجة' },
  stages: { all: 'الكل', validate: 'التحقق', build: 'البناء', scale: 'التوسع' },
  filterLabel: 'التصفية حسب المرحلة',
};

export const chapterCopy: Widen<typeof enChapterCopy> = { label: 'أعمال مختارة', view: 'عرض المشروع' };

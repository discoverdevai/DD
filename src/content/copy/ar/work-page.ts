// Arabic for en/work-page.ts (/ar/work, Oct 29, Direction A). Needs the native review like the rest of /ar.
import type { Widen } from '../types';
import type { workPage as En } from '../en/work-page';
import { shared } from './shared';
export const workPage: Widen<typeof En> = {
  seo: {
    title: 'أعمالنا: منتجات وتطبيقات ذكاء اصطناعي بنيناها | DiscoverDev',
    description: 'منتجات بنيناها من الفكرة أو النموذج الأولي: وكلاء ذكاء اصطناعي لمنصة تعليمية بتكلفة أقل 60 إلى 90%، ومتجر بالواقع المعزز، وفرق بيانات وتعلم آلي مدمجة.',
  },
  h1: 'منتجات بنيناها، وفرق بقيت مع عملائها',
  intro: 'لمؤسسين وفرق في 4 قارات، من أول دراسة سوق إلى فريق تعلم آلي مدمج.',
  numbersTitle: 'النتائج',
  numbers: [
    { value: '60–90%', label: 'تكلفة ذكاء اصطناعي أقل', who: 'EduLens، مصر' },
    { value: '+20,000', label: 'طالب على المنصة', who: 'Pyramakerz، مصر' },
    { value: '12 شهرًا', label: 'مع فريق مدمج واحد', who: 'Upscend، المملكة المتحدة' },
    { value: '5.0', label: 'تقييم', who: 'Clutch' },
  ],
  featuredTitle: 'أعمال مختارة',
  featured: [
    {
      id: 'njwar', meta: 'NJWAR · تجارة إلكترونية · السعودية', title: 'جرّب الأثاث في غرفتك قبل أن تشتريه',
      line: 'متجر Athkado بالعربية مع عرض بالواقع المعزز وتوصيات بالذكاء الاصطناعي، من دراسة السوق إلى المتجر الجاهز.',
      screens: ['njwar-web.webp', 'njwar-ar.webp'], device: 'combo',
      alt: 'متجر NJWAR على الويب بالعربية، ومعه عرض الواقع المعزز على الجوال يضع كرسيًا في غرفة حقيقية',
    },
    {
      id: 'rushr', meta: 'Rushr · منصة خدمات · الولايات المتحدة', title: 'سبّاك عند بابك، تحجزه من جوالك',
      line: '16 أسبوعًا مع فريق منتج واحد: انشر طلبك، ونطابقه مع أقرب محترف موثّق، مع دفع آمن ومحادثة مباشرة.',
      screens: ['rushr-m-dispatch.webp', 'rushr-m-searching.webp'], device: 'phone',
      alt: 'تطبيق Rushr يعرض سبّاكًا تمت مطابقته مع زري القبول والرفض',
    },
    {
      id: 'yawmy', meta: 'Yawmy Care · رعاية الأطفال · منتجنا الخاص', title: 'يوم الحضانة كله، في تطبيق واحد للأهل والفريق',
      line: 'منصة واحدة لأولياء الأمور والمعلمين والإدارة، مع الفوترة وعدة فروع. تُطلق في 2027.',
      screens: ['yawmy-dashboard.webp', 'yawmy-parent-logs.webp'], device: 'combo',
      alt: 'لوحة Yawmy Care للحضانة مع الحضور اليومي، وتطبيق أولياء الأمور يعرض يوم الطفل: المزاج والوجبات والقيلولة',
    },
  ],
  ask: 'تريد منتجًا كهذه؟ أخبرنا أين أنت، ونخبرك من أين تبدأ.',
  stages: { validate: 'التحقق', build: 'البناء', scale: 'التوسع' },
  indexTitle: 'كل عملائنا',
  index: [
    { name: 'EduLens', logo: 'edulens.png', mark: 'icon', line: 'ثلاثة وكلاء ذكاء اصطناعي لمنصة تعليمية، ثم تكلفة ذكاء اصطناعي أقل 60 إلى 90%.', stage: 'البناء', tags: ['وكلاء ذكاء اصطناعي', 'مصر'] },
    { name: 'Upscend', logo: 'upscend.png', mark: 'word', line: 'فريق منتج مدمج لمدة 12 شهرًا على منصة تعلّم للشركات، يدير خارطة الطريق وقائمة المهام والسبرنتات.', stage: 'التوسع', tags: ['فريق مخصص', 'المملكة المتحدة'] },
    { name: 'BioBank', logo: 'biobank.png', mark: 'icon', line: 'تطبيق صحي يشرح نتائج التحاليل بلغة بسيطة، مع ضوابط للسلامة الطبية.', stage: 'البناء', tags: ['ذكاء اصطناعي', 'تقنية صحية'] },
    { name: 'Nile Support', logo: 'nile-support.png', mark: 'icon', line: 'وكلاء ذكاء اصطناعي لعمليات الاتصال، وصفحة هبوط، وتعزيز للفريق.', stage: 'البناء', tags: ['وكلاء ذكاء اصطناعي', 'الولايات المتحدة'] },
    { name: 'Pyramakerz', line: 'بيانات وتعلم آلي وأتمتة لمنصة تعليمية تضم أكثر من 20,000 طالب.', stage: 'التوسع', tags: ['بيانات وتعلم آلي', 'مصر'] },
    { name: 'Arheb', logo: 'arheb.png', mark: 'icon', line: 'فريق بيانات وتعلم آلي مدمج لمنصة تنقل تشاركي ذكية.', stage: 'التوسع', tags: ['بيانات وتعلم آلي', 'السعودية'] },
    { name: 'Jumlaty', logo: 'jumlaty.png', mark: 'icon', line: 'مهندس تعلم آلي لمشتريات المطاعم.', stage: 'التوسع', tags: ['تعلم آلي', 'السعودية'] },
    { name: 'Amstadd', line: 'مواقع وتطبيقات جوال باسم علامتهم التجارية.', stage: 'البناء', tags: ['باسم علامتك', 'المملكة المتحدة'] },
    { name: 'Zest', logo: 'zest.png', mark: 'word', line: 'دراسة سوق وتحليل للآراء لاختبار الطلب قبل البناء.', stage: 'التحقق', tags: ['دراسة سوق'] },
    { name: 'Fantacalcio', line: 'خطة لدخول السوق المصري.', stage: 'التحقق', tags: ['خطة دخول السوق', 'من إيطاليا إلى مصر'] },
  ],
  band: { title: 'تريد نتائج كهذه لمنتجك؟', link: shared.reviewStartLink },
};

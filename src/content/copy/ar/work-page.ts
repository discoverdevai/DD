// Arabic for en/work-page.ts (/ar/work, Oct 29). Needs the native review like the rest of /ar.
import type { Widen } from '../types';
import type { workPage as En } from '../en/work-page';
import { shared } from './shared';
export const workPage: Widen<typeof En> = {
  seo: {
    title: 'أعمالنا: منتجات وتطبيقات ذكاء اصطناعي أطلقناها | DiscoverDev',
    description: 'منتجات أخذناها من الفكرة أو النموذج الأولي إلى الإطلاق: وكلاء ذكاء اصطناعي لمنصة تعليمية بتكلفة أقل 60 إلى 90%، ومتجر بالواقع المعزز، وفرق بيانات وتعلم آلي مدمجة.',
  },
  h1: 'منتجات ساعدنا في إطلاقها',
  intro: 'من وكلاء الذكاء الاصطناعي إلى المنصات الإلكترونية، لمؤسسين وفرق في 4 قارات. كل مشروع يوضح المشكلة، وما فعلناه، وما تغيّر.',
  moreTitle: 'المزيد من أعمالنا',
  band: { title: 'تريد نتائج كهذه لمنتجك؟', link: shared.reviewStartLink },
};

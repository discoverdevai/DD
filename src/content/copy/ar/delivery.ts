// Arabic for en/delivery.ts, the hero sprint board (context/03-copy-ar.md §2). The board path stays in Latin (code).
import type { delivery as en } from '../en/delivery';
import type { Widen } from '../types';
import { shared } from './shared';
export const delivery: Widen<typeof en> = {
  path: 'your-product / sprint-board',
  badge: 'مثال',
  stage: 'البناء',
  week: 'الأسبوع 4 من 10',
  weeks: 10,
  current: 4,
  ai: {
    title: 'الذكاء الاصطناعي يتولى الجزء الأكبر',
    states: { pending: 'يكتب المسودة', done: 'مسودة جاهزة' },
    items: ['مسودة واجهة الحجز البرمجية (API) من المواصفات', 'اختبارات لكل واجهة برمجية', 'مسودة نقل البيانات والبيانات الأولية'],
  },
  human: {
    title: 'كبار المهندسين مسؤولون عن الجودة',
    states: { pending: 'قيد المراجعة', done: 'معتمد' },
    items: ['قرار معماري مسجّل', 'مراجعة الكود: تعديلان مطلوبان', 'اختبار الدفع من البداية إلى النهاية'],
  },
  release: {
    title: 'الإصدار 0.4',
    status: 'نُشر على بيئة الاختبار',
    by: 'اعتمده مهندس أول',
    demo: 'عرض أسبوعي معك',
  },
  footer: shared.personResponsible,
  caption: 'مثال على سبرنت يسير بطريقة DiscoverDev: الذكاء الاصطناعي يكتب المسودة، ثم يعتمد مهندس أول الإصدار.',
};

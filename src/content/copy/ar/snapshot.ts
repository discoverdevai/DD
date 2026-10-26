// Arabic for en/snapshot.ts (sample Review findings on /ar/build). Generic, labelled as an example, no client data.
import type { snapshot as en } from '../en/snapshot';
import type { Widen } from '../types';

export const snapshot: Widen<typeof en> = {
  title: 'نموذج من الملاحظات',
  meta: 'تقرير توضيحي، وليس لعميل',
  severity: { critical: 'حرجة', high: 'عالية', medium: 'متوسطة' },
  status: { planned: 'الإصلاح مخطط', fixed: 'تم الإصلاح' },
  findings: [
    { severity: 'critical', title: 'أمان مستوى الصفوف (RLS) معطّل في 3 جداول', area: 'البيانات والتحقق من الهوية', status: 'planned' },
    { severity: 'critical', title: 'مفتاح سري ظاهر في كود المتصفح', area: 'الوصول والأمان', status: 'fixed' },
    { severity: 'high', title: 'أحداث الدفع لا يُتحقق منها على الخادم', area: 'المدفوعات', status: 'planned' },
  ],
  verdict: 'الحكم: أصلِح، ولا تُعِد البناء',
  quote: 'عرض سعر ثابت مع التقرير',
  caption: 'مثال على ملاحظات من Launch-Ready Review',
};

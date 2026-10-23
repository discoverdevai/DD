// Arabic for en/not-found.ts: /ar/404 (context/03-copy-ar.md). DRAFT until the native reviewer signs off.
import type { notFound as en } from '../en/not-found';
import type { Widen } from '../types';

export const notFound: Widen<typeof en> = {
  title: 'DiscoverDev | الصفحة غير موجودة',
  h1: 'لم نجد هذه الصفحة',
  body: 'قد يكون الرابط قديمًا أو مكتوبًا بخطأ. موقعنا بتصميم جديد، فبعض الروابط القديمة انتقلت.',
  links: { home: 'اذهب إلى الصفحة الرئيسية', review: 'اعرف المزيد عن Launch-Ready Review', work: 'شاهد أعمالنا', insights: 'اقرأ الأدلة' },
  help: 'تبحث عن شيء محدد؟ راسل',
  command: '$ cd /page-not-found',
};

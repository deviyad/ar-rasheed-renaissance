import campus from "@/assets/campus-hero.jpg";
import lab from "@/assets/college-engineering.jpg";
import library from "@/assets/campus-library.jpg";
import classroom from "@/assets/campus-classroom.jpg";
import life from "@/assets/student-life.jpg";
import type { Announcement, EventItem, NewsItem } from "./types";

/** Demo editorial content — replace with the university's official newsroom feed. */
export const news: NewsItem[] = [
  {
    slug: "smart-campus-initiative",
    title: {
      ar: "مبادرة الحرم الذكي: توسيع الخدمات الرقمية للطلبة",
      en: "Smart campus initiative: expanding digital student services",
    },
    excerpt: {
      ar: "عرض تعريفي لمراحل التحوّل الرقمي في الحرم الجامعي وخدماته. (محتوى تجريبي قابل للاستبدال)",
      en: "An overview of the campus digital transformation stages and services. (Editable demo content)",
    },
    body: {
      ar: [
        "هذا نص تجريبي مخصص لعرض تنسيق صفحة الخبر، ويُستبدل بالمحتوى الرسمي الصادر عن إدارة الجامعة.",
        "يمكن لإدارة المحتوى إضافة الفقرات والصور والروابط الرسمية من خلال نظام إدارة المحتوى لاحقاً.",
      ],
      en: [
        "This is demo text illustrating the article layout; it will be replaced with official university content.",
        "Content editors will be able to add paragraphs, images and official links through a CMS later.",
      ],
    },
    category: { ar: "الحرم الجامعي", en: "Campus" },
    categoryKey: "campus",
    date: "2026-08-24",
    image: campus,
    imageAlt: {
      ar: "حرم الجامعة وقت الغروب وطلبة يسيرون في الساحة",
      en: "University campus at sunset with students walking across the plaza",
    },
    featured: true,
  },
  {
    slug: "research-week",
    title: {
      ar: "أسبوع البحث العلمي يستعرض مشاريع الطلبة التطبيقية",
      en: "Research week showcases applied student projects",
    },
    excerpt: {
      ar: "فعالية سنوية لعرض مشاريع الطلبة البحثية. (محتوى تجريبي قابل للاستبدال)",
      en: "An annual event presenting student research projects. (Editable demo content)",
    },
    body: {
      ar: ["نص تجريبي لصفحة الخبر يُستبدل بالمحتوى الرسمي."],
      en: ["Demo article text to be replaced with official content."],
    },
    category: { ar: "بحث وابتكار", en: "Research" },
    categoryKey: "research",
    date: "2026-07-15",
    image: lab,
    imageAlt: {
      ar: "طلبة يعرضون مشروعاً هندسياً في المختبر",
      en: "Students presenting an engineering project in the lab",
    },
  },
  {
    slug: "library-expansion",
    title: {
      ar: "توسعة المكتبة الجامعية ومصادر التعلّم الرقمية",
      en: "University library expansion and digital learning resources",
    },
    excerpt: {
      ar: "زيادة مساحات الدراسة ومصادر المعرفة. (محتوى تجريبي قابل للاستبدال)",
      en: "More study space and knowledge resources. (Editable demo content)",
    },
    body: {
      ar: ["نص تجريبي لصفحة الخبر يُستبدل بالمحتوى الرسمي."],
      en: ["Demo article text to be replaced with official content."],
    },
    category: { ar: "الحرم الجامعي", en: "Campus" },
    categoryKey: "campus",
    date: "2026-06-02",
    image: library,
    imageAlt: {
      ar: "قاعة مكتبة جامعية واسعة وطلبة يدرسون",
      en: "A spacious university library hall with students studying",
    },
  },
  {
    slug: "teaching-development",
    title: {
      ar: "برنامج تطوير مهارات التدريس لأعضاء هيئة التدريس",
      en: "Teaching skills development program for faculty",
    },
    excerpt: {
      ar: "ورش تدريبية في أساليب التدريس الحديثة. (محتوى تجريبي قابل للاستبدال)",
      en: "Workshops on modern teaching methods. (Editable demo content)",
    },
    body: {
      ar: ["نص تجريبي لصفحة الخبر يُستبدل بالمحتوى الرسمي."],
      en: ["Demo article text to be replaced with official content."],
    },
    category: { ar: "أكاديمي", en: "Academic" },
    categoryKey: "academic",
    date: "2026-05-11",
    image: classroom,
    imageAlt: {
      ar: "قاعة دراسية ذكية بشاشة تفاعلية",
      en: "A smart classroom with an interactive display",
    },
  },
  {
    slug: "graduation-ceremony",
    title: {
      ar: "الجامعة تحتفل بتخريج دفعة جديدة من طلبتها",
      en: "The university celebrates a new graduating cohort",
    },
    excerpt: {
      ar: "حفل التخرج السنوي للكليات. (محتوى تجريبي قابل للاستبدال)",
      en: "The annual college graduation ceremony. (Editable demo content)",
    },
    body: {
      ar: ["نص تجريبي لصفحة الخبر يُستبدل بالمحتوى الرسمي."],
      en: ["Demo article text to be replaced with official content."],
    },
    category: { ar: "فعاليات", en: "Events" },
    categoryKey: "events",
    date: "2026-04-20",
    image: life,
    imageAlt: {
      ar: "خريجون يحتفلون بأزياء التخرج",
      en: "Graduates celebrating in caps and gowns",
    },
  },
];

export const getNews = (slug: string) => news.find((n) => n.slug === slug);

export const events: EventItem[] = [
  {
    slug: "open-day",
    title: { ar: "اليوم المفتوح للقبول", en: "Admissions open day" },
    description: {
      ar: "جولة تعريفية بالكليات والبرامج ولقاء بمرشدي القبول. (تفاصيل تجريبية)",
      en: "A tour of colleges and programs with admission advisors. (Demo details)",
    },
    date: "2026-10-05",
    time: { ar: "٩:٠٠ – ١٣:٠٠", en: "09:00 – 13:00" },
    location: { ar: "الحرم الجامعي الرئيسي", en: "Main campus" },
    category: { ar: "قبول", en: "Admissions" },
    registration: true,
  },
  {
    slug: "innovation-forum",
    title: { ar: "ملتقى الابتكار الطلابي", en: "Student innovation forum" },
    description: {
      ar: "عرض مشاريع الطلبة الابتكارية أمام لجنة تحكيم. (تفاصيل تجريبية)",
      en: "Students present innovation projects to a judging panel. (Demo details)",
    },
    date: "2026-11-12",
    time: { ar: "١٠:٠٠ – ١٥:٠٠", en: "10:00 – 15:00" },
    location: { ar: "قاعة المؤتمرات", en: "Conference hall" },
    category: { ar: "بحث وابتكار", en: "Research" },
    registration: true,
  },
  {
    slug: "career-fair",
    title: { ar: "ملتقى التوظيف والخريجين", en: "Careers & alumni fair" },
    description: {
      ar: "لقاء بين الطلبة والخريجين وجهات التوظيف. (تفاصيل تجريبية)",
      en: "Students meet alumni and employers. (Demo details)",
    },
    date: "2026-12-03",
    time: { ar: "٩:٠٠ – ١٤:٠٠", en: "09:00 – 14:00" },
    location: { ar: "ساحة الحرم الجامعي", en: "Campus plaza" },
    category: { ar: "الحياة الجامعية", en: "Student life" },
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

export const announcements: Announcement[] = [
  {
    id: "a1",
    title: { ar: "فتح باب التقديم للفصل الدراسي القادم", en: "Applications open for the next term" },
    body: {
      ar: "تُعلن مواعيد التقديم الرسمية من إدارة القبول والتسجيل. (إعلان تجريبي قابل للاستبدال)",
      en: "Official application dates are announced by the admissions office. (Editable demo notice)",
    },
    date: "2026-09-01",
    level: "important",
  },
  {
    id: "a2",
    title: { ar: "تحديث الجداول الدراسية", en: "Study timetables updated" },
    body: {
      ar: "يمكن للطلبة مراجعة الجداول عبر بوابة الطالب. (إعلان تجريبي قابل للاستبدال)",
      en: "Students can review timetables through the student portal. (Editable demo notice)",
    },
    date: "2026-08-18",
    level: "info",
  },
  {
    id: "a3",
    title: { ar: "تعليمات الامتحانات النهائية", en: "Final examination instructions" },
    body: {
      ar: "تُنشر التعليمات الرسمية قبل موعد الامتحانات. (إعلان تجريبي قابل للاستبدال)",
      en: "Official instructions are published before the exam period. (Editable demo notice)",
    },
    date: "2026-07-30",
    level: "info",
  },
];

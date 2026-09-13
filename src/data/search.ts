import { colleges } from "./colleges";
import { programs } from "./programs";
import { announcements, events, news } from "./news";
import type { Localized } from "./types";

export type SearchGroup = "pages" | "colleges" | "programs" | "news" | "events" | "announcements";

export type SearchEntry = {
  id: string;
  group: SearchGroup;
  title: Localized;
  description: Localized;
  to: string;
  params?: Record<string, string>;
};

const pages: SearchEntry[] = [
  {
    id: "page-about",
    group: "pages",
    title: { ar: "عن الجامعة", en: "About the university" },
    description: { ar: "القصة والرؤية والرسالة والقيادة", en: "Story, vision, mission, leadership" },
    to: "/about",
  },
  {
    id: "page-colleges",
    group: "pages",
    title: { ar: "الكليات", en: "Colleges" },
    description: { ar: "كليات الجامعة وبرامجها", en: "University colleges and their programs" },
    to: "/colleges",
  },
  {
    id: "page-programs",
    group: "pages",
    title: { ar: "البرامج الأكاديمية", en: "Academic programs" },
    description: { ar: "مستكشف البرامج والتخصصات", en: "Program and major explorer" },
    to: "/programs",
  },
  {
    id: "page-admission",
    group: "pages",
    title: { ar: "القبول والتسجيل", en: "Admission" },
    description: { ar: "رحلة الالتحاق والمتطلبات", en: "The admission journey and requirements" },
    to: "/admission",
  },
  {
    id: "page-student-life",
    group: "pages",
    title: { ar: "الحياة الجامعية", en: "Student life" },
    description: { ar: "الأنشطة والمرافق وخدمات الطلبة", en: "Activities, facilities and services" },
    to: "/student-life",
  },
  {
    id: "page-research",
    group: "pages",
    title: { ar: "البحث والابتكار", en: "Research & innovation" },
    description: { ar: "الأنشطة البحثية والشراكات", en: "Research activity and partnerships" },
    to: "/research",
  },
  {
    id: "page-news",
    group: "pages",
    title: { ar: "الأخبار", en: "News" },
    description: { ar: "آخر أخبار الجامعة", en: "Latest university news" },
    to: "/news",
  },
  {
    id: "page-events",
    group: "pages",
    title: { ar: "الفعاليات", en: "Events" },
    description: { ar: "الفعاليات القادمة", en: "Upcoming events" },
    to: "/events",
  },
  {
    id: "page-announcements",
    group: "pages",
    title: { ar: "الإعلانات", en: "Announcements" },
    description: { ar: "إعلانات رسمية للطلبة", en: "Official student announcements" },
    to: "/announcements",
  },
  {
    id: "page-contact",
    group: "pages",
    title: { ar: "اتصل بنا", en: "Contact" },
    description: { ar: "بيانات التواصل ونموذج الرسائل", en: "Contact details and message form" },
    to: "/contact",
  },
];

export const searchIndex: SearchEntry[] = [
  ...pages,
  ...colleges.map<SearchEntry>((c) => ({
    id: `college-${c.slug}`,
    group: "colleges",
    title: c.name,
    description: c.short,
    to: "/colleges/$slug",
    params: { slug: c.slug },
  })),
  ...programs.map<SearchEntry>((p) => ({
    id: `program-${p.slug}`,
    group: "programs",
    title: p.name,
    description: p.summary,
    to: "/programs/$slug",
    params: { slug: p.slug },
  })),
  ...news.map<SearchEntry>((n) => ({
    id: `news-${n.slug}`,
    group: "news",
    title: n.title,
    description: n.excerpt,
    to: "/news/$slug",
    params: { slug: n.slug },
  })),
  ...events.map<SearchEntry>((e) => ({
    id: `event-${e.slug}`,
    group: "events",
    title: e.title,
    description: e.description,
    to: "/events",
  })),
  ...announcements.map<SearchEntry>((a) => ({
    id: `ann-${a.id}`,
    group: "announcements",
    title: a.title,
    description: a.body,
    to: "/announcements",
  })),
];

export function searchSite(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter((entry) =>
    [entry.title.ar, entry.title.en, entry.description.ar, entry.description.en]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}

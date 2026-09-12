import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "ar" | "en";
export type Localized = { ar: string; en: string };
export type LocalizedList = { ar: string[]; en: string[] };

const STORAGE_KEY = "aru.locale";

type I18nValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  /** Pick the active language from a localized value. */
  pick: <T>(value: { ar: T; en: T }) => T;
  /** Translate a UI string key. */
  t: (key: UiKey) => string;
  formatDate: (iso: string) => string;
  formatNumber: (value: number) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

/** UI strings. Adding a language = adding one entry per key. */
export const ui = {
  "nav.about": { ar: "عن الجامعة", en: "About" },
  "nav.colleges": { ar: "الكليات والبرامج", en: "Colleges & Programs" },
  "nav.admission": { ar: "القبول والتسجيل", en: "Admission" },
  "nav.life": { ar: "الحياة الجامعية", en: "Student Life" },
  "nav.research": { ar: "البحث والابتكار", en: "Research" },
  "nav.news": { ar: "الأخبار والفعاليات", en: "News & Events" },
  "nav.contact": { ar: "اتصل بنا", en: "Contact" },
  "nav.menu": { ar: "القائمة", en: "Menu" },
  "nav.close": { ar: "إغلاق", en: "Close" },
  "cta.apply": { ar: "التقديم والالتحاق", en: "Apply Now" },
  "cta.portal": { ar: "بوابة الطالب", en: "Student Portal" },
  "cta.explorePrograms": { ar: "اكتشف برامجنا", en: "Explore Programs" },
  "cta.startJourney": { ar: "ابدأ رحلة الالتحاق", en: "Start Your Application" },
  "cta.guide": { ar: "دليل القبول والتسجيل", en: "Admission Guide" },
  "cta.exploreCollege": { ar: "استكشف الكلية", en: "Explore College" },
  "cta.readMore": { ar: "اقرأ المزيد", en: "Read more" },
  "cta.viewAll": { ar: "عرض الكل", en: "View all" },
  "cta.allNews": { ar: "عرض جميع الأخبار", en: "View all news" },
  "cta.details": { ar: "تفاصيل البرنامج", en: "Program details" },
  "cta.discoverMore": { ar: "اكتشف المزيد", en: "Discover more" },
  "search.label": { ar: "بحث", en: "Search" },
  "search.placeholder": {
    ar: "ابحث في الصفحات والبرامج والأخبار…",
    en: "Search pages, programs, news…",
  },
  "search.title": { ar: "البحث في الموقع", en: "Search the site" },
  "search.results": { ar: "النتائج", en: "Results" },
  "search.empty": { ar: "لا توجد نتائج مطابقة لبحثك.", en: "No results match your search." },
  "search.hint": { ar: "اكتب كلمة للبدء بالبحث.", en: "Type a keyword to start searching." },
  "search.groups.pages": { ar: "الصفحات", en: "Pages" },
  "search.groups.colleges": { ar: "الكليات", en: "Colleges" },
  "search.groups.programs": { ar: "البرامج", en: "Programs" },
  "search.groups.news": { ar: "الأخبار", en: "News" },
  "search.groups.events": { ar: "الفعاليات", en: "Events" },
  "search.groups.announcements": { ar: "الإعلانات", en: "Announcements" },
  "theme.label": { ar: "المظهر", en: "Theme" },
  "theme.system": { ar: "النظام", en: "System" },
  "theme.light": { ar: "فاتح", en: "Light" },
  "theme.dark": { ar: "داكن", en: "Dark" },
  "lang.label": { ar: "اللغة", en: "Language" },
  "filter.all": { ar: "الكل", en: "All" },
  "filter.college": { ar: "الكلية", en: "College" },
  "filter.degree": { ar: "الدرجة العلمية", en: "Degree" },
  "filter.field": { ar: "المجال", en: "Field" },
  "filter.category": { ar: "التصنيف", en: "Category" },
  "empty.news": { ar: "لا توجد أخبار متاحة حالياً.", en: "No news available." },
  "empty.events": { ar: "لا توجد فعاليات قادمة.", en: "No events found." },
  "empty.programs": { ar: "لا توجد برامج مطابقة لبحثك.", en: "No programs match your search." },
  "empty.announcements": { ar: "لا توجد إعلانات حالياً.", en: "No announcements right now." },
  "label.date": { ar: "التاريخ", en: "Date" },
  "label.time": { ar: "الوقت", en: "Time" },
  "label.location": { ar: "المكان", en: "Location" },
  "label.college": { ar: "الكلية", en: "College" },
  "label.degree": { ar: "الدرجة", en: "Degree" },
  "label.duration": { ar: "مدة الدراسة", en: "Duration" },
  "label.programs": { ar: "البرامج", en: "Programs" },
  "label.related": { ar: "برامج ذات صلة", en: "Related programs" },
  "label.relatedNews": { ar: "أخبار ذات صلة", en: "Related news" },
  "label.share": { ar: "مشاركة", en: "Share" },
  "label.home": { ar: "الرئيسية", en: "Home" },
  "label.page": { ar: "صفحة", en: "Page" },
  "label.previous": { ar: "السابق", en: "Previous" },
  "label.next": { ar: "التالي", en: "Next" },
  "notice.content": {
    ar: "محتوى تجريبي قابل للتحرير — يُستبدل ببيانات الجامعة الرسمية.",
    en: "Editable demo content — to be replaced with official university data.",
  },
  "footer.rights": { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  "footer.privacy": { ar: "سياسة الخصوصية", en: "Privacy" },
  "footer.terms": { ar: "الشروط والأحكام", en: "Terms" },
  "footer.a11y": { ar: "إمكانية الوصول", en: "Accessibility" },
  "footer.university": { ar: "الجامعة", en: "University" },
  "footer.academics": { ar: "الشأن الأكاديمي", en: "Academics" },
  "footer.admissions": { ar: "القبول", en: "Admissions" },
  "footer.services": { ar: "خدمات الطلاب", en: "Student Services" },
  "footer.resources": { ar: "روابط", en: "Resources" },
  "footer.contact": { ar: "التواصل", en: "Contact" },
  "skip.content": { ar: "تخطَّ إلى المحتوى", en: "Skip to content" },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;

function readStored(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(STORAGE_KEY);
  return v === "ar" || v === "en" ? v : null;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const stored = readStored();
    if (stored) setLocaleState(stored);
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo<I18nValue>(() => {
    const tag = locale === "ar" ? "ar" : "en-GB";
    return {
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      setLocale,
      pick: (v) => v[locale],
      t: (key) => ui[key][locale],
      formatDate: (iso) =>
        new Intl.DateTimeFormat(tag, {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(iso)),
      formatNumber: (n) => new Intl.NumberFormat(tag).format(n),
    };
  }, [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

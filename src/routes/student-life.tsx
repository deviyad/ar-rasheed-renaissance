import { createFileRoute } from "@tanstack/react-router";
import studentLife from "@/assets/student-life.jpg";
import classroom from "@/assets/campus-classroom.jpg";
import library from "@/assets/campus-library.jpg";
import campus from "@/assets/campus-hero.jpg";
import { useI18n } from "@/lib/i18n";
import { Container, DemoNotice, Reveal, SectionHeader } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { EventCard } from "@/components/site/cards";
import { events } from "@/data/news";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "الحياة الجامعية | جامعة الرشيد الذكية" },
      {
        name: "description",
        content: "الأنشطة الطلابية والمرافق والخدمات والفعاليات في حرم جامعة الرشيد الذكية.",
      },
      { property: "og:title", content: "الحياة الجامعية | جامعة الرشيد الذكية" },
      { property: "og:description", content: "الأنشطة والمرافق وخدمات الطلبة والفعاليات." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/student-life" },
    ],
    links: [{ rel: "canonical", href: "/student-life" }],
  }),
  component: StudentLifePage,
});

function StudentLifePage() {
  const { t, locale } = useI18n();

  const services = [
    {
      ar: { t: "الإرشاد الأكاديمي", d: "مرشد أكاديمي يتابع مسار الطالب الدراسي." },
      en: { t: "Academic advising", d: "An advisor follows each student's academic path." },
    },
    {
      ar: { t: "خدمات التسجيل", d: "إجراءات التسجيل والجداول والوثائق الدراسية." },
      en: { t: "Registration services", d: "Registration, timetables and academic documents." },
    },
    {
      ar: { t: "الأنشطة الطلابية", d: "أندية وفرق ومبادرات طلابية داخل الحرم." },
      en: { t: "Student activities", d: "Clubs, teams and student initiatives on campus." },
    },
    {
      ar: { t: "الدعم المهني", d: "تجهيز الطلبة لسوق العمل والتدريب العملي." },
      en: { t: "Career support", d: "Preparing students for the labour market and internships." },
    },
  ];
  const L = locale === "ar" ? "ar" : "en";

  const gallery = [
    { img: studentLife, ar: "فعاليات وتخرج", en: "Events and graduation" },
    { img: classroom, ar: "قاعات دراسية", en: "Classrooms" },
    { img: library, ar: "المكتبة", en: "Library" },
    { img: campus, ar: "ساحات الحرم", en: "Campus grounds" },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("nav.life")}
        title={locale === "ar" ? "الحياة الجامعية" : "Student life"}
        description={
          locale === "ar"
            ? "تجربة جامعية متكاملة تجمع بين الدراسة والأنشطة والخدمات الطلابية."
            : "A complete university experience combining study, activities and student services."
        }
        breadcrumbs={[{ label: t("nav.life") }]}
      />

      <Container className="py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal className="overflow-hidden rounded-2xl border border-border">
            <img
              src={studentLife}
              alt={locale === "ar" ? "طلبة يحتفلون بالتخرج" : "Students celebrating graduation"}
              loading="lazy"
              width={1280}
              height={854}
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl font-bold md:text-3xl">
              {locale === "ar" ? "حياة الحرم الجامعي" : "Campus life"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {locale === "ar"
                ? "تحرص الجامعة على بيئة طلابية نشطة تشمل الأنشطة العلمية والثقافية والرياضية والمبادرات المجتمعية. تفاصيل الأندية والبرامج تُضاف من عمادة شؤون الطلاب."
                : "The university supports an active student environment spanning academic, cultural, sporting and community initiatives. Club and program details are supplied by student affairs."}
            </p>
            <DemoNotice className="mt-5" />
          </Reveal>
        </div>

        <SectionHeader
          className="mt-16"
          eyebrow={locale === "ar" ? "الخدمات" : "Services"}
          title={locale === "ar" ? "خدمات الطلبة" : "Student services"}
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.en.t} delay={i * 60} className="bg-card p-6">
              <h3 className="text-base font-bold">{s[L].t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s[L].d}</p>
            </Reveal>
          ))}
        </div>

        <SectionHeader
          className="mt-16"
          eyebrow={locale === "ar" ? "معرض الصور" : "Gallery"}
          title={locale === "ar" ? "لمحات من الحرم" : "Campus glimpses"}
        />
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
          {gallery.map((g) => (
            <figure
              key={g.en}
              className="w-[70%] shrink-0 overflow-hidden rounded-2xl border border-border bg-card md:w-auto"
            >
              <img
                src={g.img}
                alt={locale === "ar" ? g.ar : g.en}
                loading="lazy"
                width={1280}
                height={854}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-3 text-xs font-medium text-muted-foreground">
                {locale === "ar" ? g.ar : g.en}
              </figcaption>
            </figure>
          ))}
        </div>

        <SectionHeader
          className="mt-16"
          eyebrow={locale === "ar" ? "الفعاليات" : "Events"}
          title={t("search.groups.events")}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {events.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      </Container>
    </>
  );
}

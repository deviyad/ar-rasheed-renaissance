import { createFileRoute } from "@tanstack/react-router";
import lab from "@/assets/college-engineering.jpg";
import { useI18n } from "@/lib/i18n";
import { Container, DemoNotice, Reveal, SectionHeader } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "البحث والابتكار | جامعة الرشيد الذكية" },
      {
        name: "description",
        content: "أنشطة البحث العلمي والابتكار والشراكات والأثر المجتمعي في جامعة الرشيد الذكية.",
      },
      { property: "og:title", content: "البحث والابتكار | جامعة الرشيد الذكية" },
      { property: "og:description", content: "البحث العلمي والابتكار والشراكات والأثر المجتمعي." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/research" },
    ],
    links: [{ rel: "canonical", href: "/research" }],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const { t, locale } = useI18n();
  const L = locale === "ar" ? "ar" : "en";

  const pillars = [
    {
      ar: { t: "البحث التطبيقي", d: "مشاريع بحثية موجّهة نحو حلول عملية لاحتياجات المجتمع." },
      en: { t: "Applied research", d: "Research directed at practical solutions for community needs." },
    },
    {
      ar: { t: "ابتكار الطلبة", d: "دعم مشاريع التخرج والمبادرات الابتكارية للطلبة." },
      en: { t: "Student innovation", d: "Support for graduation projects and student initiatives." },
    },
    {
      ar: { t: "الشراكات", d: "تعاون مع مؤسسات أكاديمية ومهنية. التفاصيل تُضاف رسمياً." },
      en: { t: "Partnerships", d: "Collaboration with academic and professional bodies. Details to be added." },
    },
    {
      ar: { t: "الأثر المجتمعي", d: "أنشطة وخدمات تسهم في تنمية المجتمع المحلي." },
      en: { t: "Community impact", d: "Activities and services contributing to local development." },
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("nav.research")}
        title={locale === "ar" ? "البحث والابتكار" : "Research & innovation"}
        description={
          locale === "ar"
            ? "منظومة بحثية تربط المعرفة الأكاديمية بالتطبيق العملي وخدمة المجتمع."
            : "A research ecosystem linking academic knowledge to practice and community service."
        }
        breadcrumbs={[{ label: t("nav.research") }]}
      />

      <Container className="py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal className="overflow-hidden rounded-2xl border border-border">
            <img
              src={lab}
              alt={locale === "ar" ? "طلبة يعملون في مختبر تقني" : "Students working in a technology lab"}
              loading="lazy"
              width={1280}
              height={854}
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-2xl font-bold md:text-3xl">
              {locale === "ar" ? "من الفكرة إلى التطبيق" : "From idea to application"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {locale === "ar"
                ? "تدعم الجامعة الأنشطة البحثية للطلبة وأعضاء هيئة التدريس عبر المختبرات ومصادر التعلّم. قائمة المشاريع والمنشورات تُضاف من الجهة المختصة."
                : "The university supports student and faculty research through laboratories and learning resources. Project and publication lists are to be provided officially."}
            </p>
            <DemoNotice className="mt-5" />
          </Reveal>
        </div>

        <SectionHeader
          className="mt-16"
          eyebrow={locale === "ar" ? "المحاور" : "Pillars"}
          title={locale === "ar" ? "محاور العمل البحثي" : "Research pillars"}
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.en.t} delay={i * 60} className="bg-card p-6 md:p-8">
              <h3 className="text-base font-bold md:text-lg">{p[L].t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p[L].d}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}

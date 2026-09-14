import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { colleges } from "@/data/colleges";
import { Container, Reveal } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { CollegeCard } from "@/components/site/cards";

export const Route = createFileRoute("/colleges/")({
  head: () => ({
    meta: [
      { title: "الكليات | جامعة الرشيد الذكية" },
      {
        name: "description",
        content:
          "كليات جامعة الرشيد الذكية: الطب والعلوم الصحية، طب الأسنان، الهندسة والتكنولوجيا، المال والأعمال.",
      },
      { property: "og:title", content: "الكليات | جامعة الرشيد الذكية" },
      { property: "og:description", content: "تعرّف على كليات الجامعة وبرامجها الأكاديمية." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/colleges" },
    ],
    links: [{ rel: "canonical", href: "/colleges" }],
  }),
  component: CollegesPage,
});

function CollegesPage() {
  const { t, locale } = useI18n();
  return (
    <>
      <PageHero
        eyebrow={t("nav.colleges")}
        title={locale === "ar" ? "الكليات" : "Colleges"}
        description={
          locale === "ar"
            ? "أربع كليات تغطي المجالات الصحية والهندسية والإدارية، لكل منها برامجها ومرافقها."
            : "Four colleges across health, engineering and business, each with its own programs and facilities."
        }
        breadcrumbs={[{ label: locale === "ar" ? "الكليات" : "Colleges" }]}
      />
      <Container className="py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {colleges.map((college, i) => (
            <Reveal key={college.slug} delay={i * 70}>
              <CollegeCard college={college} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}

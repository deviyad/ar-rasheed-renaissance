import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Container, DemoNotice, Reveal, SectionHeader } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/admission")({
  head: () => ({
    meta: [
      { title: "القبول والتسجيل | جامعة الرشيد الذكية" },
      {
        name: "description",
        content: "رحلة الالتحاق بجامعة الرشيد الذكية: الخطوات والمتطلبات والمستندات والأسئلة الشائعة.",
      },
      { property: "og:title", content: "القبول والتسجيل | جامعة الرشيد الذكية" },
      { property: "og:description", content: "خطوات الالتحاق والمتطلبات والأسئلة الشائعة." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/admission" },
    ],
    links: [{ rel: "canonical", href: "/admission" }],
  }),
  component: AdmissionPage,
});

const steps = [
  {
    ar: { t: "اكتشف", d: "تعرّف على الكليات والبرامج المتاحة وما يناسب اهتماماتك." },
    en: { t: "Discover", d: "Explore the colleges and programs and what fits your interests." },
  },
  {
    ar: { t: "اختر البرنامج", d: "حدّد البرنامج الأكاديمي الذي ترغب بالالتحاق به." },
    en: { t: "Choose a program", d: "Select the academic program you wish to join." },
  },
  {
    ar: { t: "راجع المتطلبات", d: "اطّلع على شروط القبول المعلنة من إدارة القبول." },
    en: { t: "Review requirements", d: "Check the admission criteria published by the office." },
  },
  {
    ar: { t: "جهّز المستندات", d: "استكمل المستندات الرسمية المطلوبة للتقديم." },
    en: { t: "Prepare documents", d: "Complete the official documents required to apply." },
  },
  {
    ar: { t: "قدّم الطلب", d: "أرسل طلب الالتحاق عبر القناة الرسمية المعتمدة." },
    en: { t: "Apply", d: "Submit your application through the official channel." },
  },
  {
    ar: { t: "تابع طلبك", d: "تابع حالة الطلب حتى صدور نتيجة القبول." },
    en: { t: "Follow up", d: "Track your application until the decision is issued." },
  },
];

const faq = [
  {
    q: { ar: "متى يفتح باب التقديم؟", en: "When do applications open?" },
    a: {
      ar: "تُعلن المواعيد الرسمية من إدارة القبول والتسجيل. (إجابة تجريبية قابلة للاستبدال)",
      en: "Official dates are announced by the admissions office. (Editable demo answer)",
    },
  },
  {
    q: { ar: "ما المستندات المطلوبة؟", en: "Which documents are required?" },
    a: {
      ar: "تُحدَّد قائمة المستندات رسمياً ضمن دليل القبول. (إجابة تجريبية قابلة للاستبدال)",
      en: "The document list is defined officially in the admission guide. (Editable demo answer)",
    },
  },
  {
    q: { ar: "هل تتوفر برامج تحضيرية؟", en: "Are preparatory programs available?" },
    a: {
      ar: "تُضاف التفاصيل من الجهة المختصة بالجامعة. (إجابة تجريبية قابلة للاستبدال)",
      en: "Details to be supplied by the relevant university office. (Editable demo answer)",
    },
  },
];

function AdmissionPage() {
  const { t, locale } = useI18n();
  const L = locale === "ar" ? "ar" : "en";

  return (
    <>
      <PageHero
        eyebrow={t("nav.admission")}
        title={locale === "ar" ? "رحلة الالتحاق" : "The admission journey"}
        description={
          locale === "ar"
            ? "ست خطوات واضحة من الاكتشاف حتى متابعة الطلب."
            : "Six clear steps from discovery to following up on your application."
        }
        breadcrumbs={[{ label: t("nav.admission") }]}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/programs"
            className="inline-flex h-12 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            {t("cta.explorePrograms")}
          </Link>
          <a
            href="#faq"
            className="inline-flex h-12 items-center rounded-xl border border-border px-6 text-sm font-semibold"
          >
            {locale === "ar" ? "الأسئلة الشائعة" : "FAQ"}
          </a>
        </div>
      </PageHero>

      <Container className="py-14 md:py-20">
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.en.t} delay={i * 60} as="li" className="bg-card p-6">
              <span className="text-xs font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-2 text-base font-bold">{step[L].t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step[L].d}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-xl font-bold">{t("cta.guide")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {locale === "ar"
              ? "يُرفَق هنا دليل القبول الرسمي (PDF) بعد تزويده من إدارة الجامعة."
              : "The official admission guide (PDF) will be attached here once provided by the university."}
          </p>
          <DemoNotice className="mt-4 max-w-xl" />
        </div>
      </Container>

      <section id="faq" className="bg-surface/50 py-14 md:py-20">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow={locale === "ar" ? "استفسارات" : "Questions"}
            title={locale === "ar" ? "الأسئلة الشائعة" : "Frequently asked questions"}
          />
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-5">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-start text-sm font-semibold">
                  {item.q[L]}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.a[L]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  );
}

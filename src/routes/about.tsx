import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { leadership, university } from "@/data/university";
import { Container, DemoNotice, Reveal, SectionHeader } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { PersonCard } from "@/components/site/cards";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "عن الجامعة | جامعة الرشيد الذكية" },
      {
        name: "description",
        content: "قصة جامعة الرشيد الذكية ورؤيتها ورسالتها وقيمها وأهدافها الاستراتيجية وقيادتها.",
      },
      { property: "og:title", content: "عن الجامعة | جامعة الرشيد الذكية" },
      { property: "og:description", content: "الرؤية والرسالة والقيم والقيادة والمسيرة." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { pick, t, locale } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.about")}
        title={pick(university.name)}
        description={pick(university.story)}
        breadcrumbs={[{ label: t("nav.about") }]}
      />

      <Container className="py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-lg font-bold">{locale === "ar" ? "الرؤية" : "Vision"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {pick(university.vision)}
            </p>
          </Reveal>
          <Reveal delay={80} className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="text-lg font-bold">{locale === "ar" ? "الرسالة" : "Mission"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {pick(university.mission)}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold">{locale === "ar" ? "القيم" : "Values"}</h2>
            <ul className="mt-4 space-y-2">
              {pick(university.values).map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {v}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold">
              {locale === "ar" ? "الأهداف الاستراتيجية" : "Strategic objectives"}
            </h2>
            <ul className="mt-4 space-y-2">
              {pick(university.objectives).map((v) => (
                <li key={v} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {v}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>

      <section className="bg-surface/50 py-14 md:py-20">
        <Container>
          <SectionHeader
            eyebrow={locale === "ar" ? "المسيرة" : "Timeline"}
            title={locale === "ar" ? "محطات في مسيرة الجامعة" : "Milestones in our journey"}
          />
          <DemoNotice className="mb-8 max-w-xl" />
          <ol className="relative space-y-8 border-s border-border ps-6">
            {university.timeline.map((item) => (
              <li key={item.title.en} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -inset-is-[1.9rem] top-1.5 size-3 -translate-x-1/2 rounded-full bg-accent start-[-1.9rem]"
                />
                <p className="text-xs font-semibold text-accent">{item.year}</p>
                <h3 className="mt-1 text-base font-bold">{pick(item.title)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pick(item.text)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Container className="py-14 md:py-20">
        <SectionHeader
          eyebrow={locale === "ar" ? "القيادة" : "Leadership"}
          title={locale === "ar" ? "قيادة الجامعة" : "University leadership"}
          description={
            locale === "ar"
              ? "أسماء وصور وكلمات القيادة تُضاف رسمياً من إدارة الجامعة."
              : "Names, photos and messages are to be supplied officially by the university."
          }
        />
        <div className="grid gap-5 md:grid-cols-3">
          {leadership.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </Container>
    </>
  );
}

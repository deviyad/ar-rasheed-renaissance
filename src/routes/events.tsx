import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { events } from "@/data/news";
import { Container, DemoNotice, Reveal } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { EventCard } from "@/components/site/cards";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "الفعاليات | جامعة الرشيد الذكية" },
      { name: "description", content: "فعاليات وأنشطة جامعة الرشيد الذكية القادمة ومواعيدها." },
      { property: "og:title", content: "الفعاليات | جامعة الرشيد الذكية" },
      { property: "og:description", content: "الفعاليات والأنشطة القادمة ومواعيدها." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.news")}
        title={t("search.groups.events")}
        description={
          locale === "ar"
            ? "الفعاليات والأنشطة القادمة في الحرم الجامعي."
            : "Upcoming events and activities on campus."
        }
        breadcrumbs={[{ label: t("search.groups.events") }]}
      />

      <Container className="py-12 md:py-16">
        {events.length ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, i) => (
              <Reveal key={event.slug} delay={i * 60}>
                <EventCard event={event} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            {t("empty.events")}
          </div>
        )}
        <DemoNotice className="mt-8 max-w-xl" />
      </Container>
    </>
  );
}

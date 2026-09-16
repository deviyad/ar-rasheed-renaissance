import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { announcements } from "@/data/news";
import { Container, DemoNotice, Reveal } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { AnnouncementCard } from "@/components/site/cards";

export const Route = createFileRoute("/announcements")({
  head: () => ({
    meta: [
      { title: "الإعلانات | جامعة الرشيد الذكية" },
      { name: "description", content: "الإعلانات الرسمية والتعاميم الصادرة عن جامعة الرشيد الذكية." },
      { property: "og:title", content: "الإعلانات | جامعة الرشيد الذكية" },
      { property: "og:description", content: "الإعلانات الرسمية والتعاميم الجامعية." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/announcements" },
    ],
    links: [{ rel: "canonical", href: "/announcements" }],
  }),
  component: AnnouncementsPage,
});

function AnnouncementsPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <PageHero
        eyebrow={t("nav.news")}
        title={t("search.groups.announcements")}
        description={
          locale === "ar"
            ? "تعاميم ومواعيد وإشعارات تهم الطلبة."
            : "Notices, deadlines and updates for students."
        }
        breadcrumbs={[{ label: t("search.groups.announcements") }]}
      />

      <Container className="max-w-3xl py-12 md:py-16">
        {announcements.length ? (
          <div className="space-y-4">
            {announcements.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <AnnouncementCard item={item} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            {t("empty.announcements")}
          </div>
        )}
        <DemoNotice className="mt-8" />
      </Container>
    </>
  );
}

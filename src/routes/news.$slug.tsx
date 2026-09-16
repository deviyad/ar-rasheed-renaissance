import { createFileRoute, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { getNews, news } from "@/data/news";
import { Container, Breadcrumbs, SectionHeader } from "@/components/site/primitives";
import { NewsCard } from "@/components/site/cards";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const item = getNews(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "الخبر غير موجود" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.item.title.ar} | جامعة الرشيد الذكية`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.item.excerpt.ar },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.item.excerpt.ar },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/news/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/news/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.item.title.ar,
            datePublished: loaderData.item.date,
            inLanguage: "ar",
          }),
        },
      ],
    };
  },
  component: NewsArticle,
});

function NewsArticle() {
  const { item } = Route.useLoaderData();
  const { pick, t, formatDate } = useI18n();
  const related = news.filter((n) => n.slug !== item.slug).slice(0, 2);

  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { label: t("search.groups.news"), to: "/news" },
            { label: pick(item.title) },
          ]}
        />
        <article className="mx-auto mt-6 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary">
              {pick(item.category)}
            </span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{pick(item.title)}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{pick(item.excerpt)}</p>
          <img
            src={item.image}
            alt={pick(item.imageAlt)}
            loading="lazy"
            width={1280}
            height={854}
            className="mt-8 aspect-[16/9] w-full rounded-2xl border border-border object-cover"
          />
          <div className="mt-8 space-y-4">
            {pick(item.body).map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Container>

      <section className="bg-surface/50 py-14">
        <Container>
          <SectionHeader title={t("label.relatedNews")} />
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

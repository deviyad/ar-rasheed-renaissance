import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { news } from "@/data/news";
import { Container, Reveal } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { NewsCard } from "@/components/site/cards";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/news/")({
  head: () => ({
    meta: [
      { title: "الأخبار | جامعة الرشيد الذكية" },
      { name: "description", content: "آخر أخبار جامعة الرشيد الذكية وفعالياتها ومستجداتها." },
      { property: "og:title", content: "الأخبار | جامعة الرشيد الذكية" },
      { property: "og:description", content: "آخر الأخبار والمستجدات الجامعية." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const PER_PAGE = 4;

function NewsPage() {
  const { pick, t, locale } = useI18n();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = useMemo(() => {
    const map = new Map<string, { ar: string; en: string }>();
    news.forEach((n) => map.set(n.categoryKey, n.category));
    return [...map.entries()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((n) => {
      const matchQuery =
        !q || [n.title.ar, n.title.en, n.excerpt.ar, n.excerpt.en].join(" ").toLowerCase().includes(q);
      const matchCat = category === "all" || n.categoryKey === category;
      return matchQuery && matchCat;
    });
  }, [query, category]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const chip = (active: boolean) =>
    cn(
      "whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border text-muted-foreground hover:bg-muted",
    );

  return (
    <>
      <PageHero
        eyebrow={t("nav.news")}
        title={locale === "ar" ? "الأخبار" : "News"}
        description={
          locale === "ar" ? "مستجدات الجامعة وأنشطتها." : "University updates and activities."
        }
        breadcrumbs={[{ label: t("search.groups.news") }]}
      />

      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="flex w-full items-center gap-3 rounded-xl border border-border bg-card px-4 md:max-w-sm">
            <Search aria-hidden="true" className="size-4 text-muted-foreground" />
            <span className="sr-only">{t("search.label")}</span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder={locale === "ar" ? "ابحث في الأخبار…" : "Search news…"}
              className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            <button type="button" onClick={() => setCategory("all")} className={chip(category === "all")}>
              {t("filter.all")}
            </button>
            {categories.map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setCategory(key);
                  setPage(1);
                }}
                className={chip(category === key)}
              >
                {pick(label)}
              </button>
            ))}
          </div>
        </div>

        {visible.length ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {visible.map((item, i) => (
              <Reveal key={item.slug} delay={i * 60}>
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            {t("empty.news")}
          </div>
        )}

        {pages > 1 ? (
          <nav aria-label="pagination" className="mt-10 flex items-center justify-center gap-2">
            <button
              type="button"
              disabled={current === 1}
              onClick={() => setPage(current - 1)}
              className="rounded-lg border border-border px-3 py-2 text-xs font-medium disabled:opacity-40"
            >
              {t("label.previous")}
            </button>
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-current={current === i + 1 ? "page" : undefined}
                onClick={() => setPage(i + 1)}
                className={cn(
                  "size-9 rounded-lg border text-xs font-medium",
                  current === i + 1
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border",
                )}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              disabled={current === pages}
              onClick={() => setPage(current + 1)}
              className="rounded-lg border border-border px-3 py-2 text-xs font-medium disabled:opacity-40"
            >
              {t("label.next")}
            </button>
          </nav>
        ) : null}
      </Container>
    </>
  );
}

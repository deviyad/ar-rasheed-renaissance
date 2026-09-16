import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { searchIndex, type SearchGroup } from "@/data/search";
import { Container } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "البحث | جامعة الرشيد الذكية" },
      { name: "description", content: "ابحث في صفحات جامعة الرشيد الذكية وبرامجها وأخبارها وفعالياتها." },
      { property: "og:title", content: "البحث | جامعة الرشيد الذكية" },
      { property: "og:description", content: "ابحث في الصفحات والبرامج والأخبار والفعاليات." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/search" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
  component: SearchPage,
});

const groupKey: Record<SearchGroup, `search.groups.${SearchGroup}`> = {
  pages: "search.groups.pages",
  colleges: "search.groups.colleges",
  programs: "search.groups.programs",
  news: "search.groups.news",
  events: "search.groups.events",
  announcements: "search.groups.announcements",
};

function SearchPage() {
  const { pick, t } = useI18n();
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<"all" | SearchGroup>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex.filter((entry) => {
      const haystack = [
        entry.title.ar,
        entry.title.en,
        entry.description.ar,
        entry.description.en,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q) && (group === "all" || entry.group === group);
    });
  }, [query, group]);

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
        eyebrow={t("search.label")}
        title={t("search.title")}
        breadcrumbs={[{ label: t("search.label") }]}
      >
        <label className="mt-8 flex max-w-xl items-center gap-3 rounded-xl border border-border bg-card px-4">
          <SearchIcon aria-hidden="true" className="size-4 text-muted-foreground" />
          <span className="sr-only">{t("search.label")}</span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </PageHero>

      <Container className="py-12 md:py-16">
        <div className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
          <button type="button" onClick={() => setGroup("all")} className={chip(group === "all")}>
            {t("filter.all")}
          </button>
          {(Object.keys(groupKey) as SearchGroup[]).map((g) => (
            <button key={g} type="button" onClick={() => setGroup(g)} className={chip(group === g)}>
              {t(groupKey[g])}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="mt-8">
          {!query.trim() ? (
            <p className="rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
              {t("search.hint")}
            </p>
          ) : results.length ? (
            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {results.map((entry) => (
                <li key={entry.id}>
                  <Link
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    to={entry.to as any}
                    params={entry.params as never}
                    className="block px-5 py-4 transition-colors hover:bg-muted/60"
                  >
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-accent">
                      {t(groupKey[entry.group])}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{pick(entry.title)}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{pick(entry.description)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
              {t("search.empty")}
            </p>
          )}
        </div>
      </Container>
    </>
  );
}

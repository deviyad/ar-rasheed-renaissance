import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { colleges } from "@/data/colleges";
import { programs } from "@/data/programs";
import { Container } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { ProgramRow } from "@/components/site/cards";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "البرامج الأكاديمية | جامعة الرشيد الذكية" },
      {
        name: "description",
        content: "مستكشف البرامج الأكاديمية: ابحث وصفِّ البرامج حسب الكلية والدرجة العلمية والمجال.",
      },
      { property: "og:title", content: "البرامج الأكاديمية | جامعة الرشيد الذكية" },
      { property: "og:description", content: "ابحث وصفِّ البرامج حسب الكلية والمجال." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

const fields = [
  { key: "medical", ar: "صحي وطبي", en: "Medical & health" },
  { key: "engineering", ar: "هندسة وتقنية", en: "Engineering & technology" },
  { key: "business", ar: "مال وأعمال", en: "Finance & business" },
] as const;

function ProgramsPage() {
  const { pick, t, locale } = useI18n();
  const [query, setQuery] = useState("");
  const [college, setCollege] = useState<string>("all");
  const [field, setField] = useState<string>("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs.filter((p) => {
      const matchQuery =
        !q ||
        [p.name.ar, p.name.en, p.summary.ar, p.summary.en].join(" ").toLowerCase().includes(q);
      const matchCollege = college === "all" || p.collegeSlug === college;
      const matchField = field === "all" || p.field === field;
      return matchQuery && matchCollege && matchField;
    });
  }, [query, college, field]);

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
        eyebrow={t("nav.colleges")}
        title={locale === "ar" ? "مستكشف البرامج" : "Program explorer"}
        description={
          locale === "ar"
            ? "ابحث في البرامج الأكاديمية وصفِّها حسب الكلية أو المجال."
            : "Search academic programs and filter them by college or field."
        }
        breadcrumbs={[{ label: t("label.programs") }]}
      />

      <Container className="py-10 md:py-14">
        <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
          <label className="flex items-center gap-3 rounded-xl border border-border bg-background px-4">
            <Search aria-hidden="true" className="size-4 text-muted-foreground" />
            <span className="sr-only">{t("search.label")}</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={locale === "ar" ? "ابحث باسم البرنامج…" : "Search by program name…"}
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>

          <div className="mt-4 space-y-3">
            <div>
              <p className="mb-2 text-xs font-semibold text-muted-foreground">{t("filter.college")}</p>
              <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                <button type="button" onClick={() => setCollege("all")} className={chip(college === "all")}>
                  {t("filter.all")}
                </button>
                {colleges.map((c) => (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => setCollege(c.slug)}
                    className={chip(college === c.slug)}
                  >
                    {pick(c.name)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold text-muted-foreground">{t("filter.field")}</p>
              <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
                <button type="button" onClick={() => setField("all")} className={chip(field === "all")}>
                  {t("filter.all")}
                </button>
                {fields.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setField(f.key)}
                    className={chip(field === f.key)}
                  >
                    {locale === "ar" ? f.ar : f.en}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          {results.length} / {programs.length}
        </p>

        {results.length ? (
          <ul className="mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {results.map((program) => (
              <ProgramRow key={program.slug} program={program} />
            ))}
          </ul>
        ) : (
          <div className="mt-3 rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            {t("empty.programs")}
          </div>
        )}
      </Container>
    </>
  );
}

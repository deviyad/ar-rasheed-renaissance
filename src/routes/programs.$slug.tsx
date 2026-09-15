import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { getProgram, programs } from "@/data/programs";
import { getCollege } from "@/data/colleges";
import { Container, SectionHeader } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { ProgramRow } from "@/components/site/cards";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "البرنامج غير موجود" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.program.name.ar} | جامعة الرشيد الذكية`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.program.summary.ar },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.program.summary.ar },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/programs/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/programs/${params.slug}` }],
    };
  },
  component: ProgramPage,
});

function ProgramPage() {
  const { program } = Route.useLoaderData();
  const { pick, t, locale } = useI18n();
  const college = getCollege(program.collegeSlug);
  const related = programs
    .filter((p) => p.collegeSlug === program.collegeSlug && p.slug !== program.slug)
    .slice(0, 3);

  const blocks = [
    { title: locale === "ar" ? "أهداف البرنامج" : "Objectives", items: pick(program.objectives) },
    { title: locale === "ar" ? "الفرص المهنية" : "Career opportunities", items: pick(program.careers) },
    { title: locale === "ar" ? "هيكل الدراسة" : "Study structure", items: pick(program.structure) },
    {
      title: locale === "ar" ? "متطلبات القبول" : "Admission requirements",
      items: pick(program.requirements),
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={college ? pick(college.name) : t("label.programs")}
        title={pick(program.name)}
        description={pick(program.summary)}
        breadcrumbs={[
          { label: t("label.programs"), to: "/programs" },
          { label: pick(program.name) },
        ]}
      />

      <Container className="py-12 md:py-16">
        <dl className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs text-muted-foreground">{t("label.college")}</dt>
            <dd className="mt-1 text-sm font-semibold">{college ? pick(college.name) : "—"}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">{t("label.degree")}</dt>
            <dd className="mt-1 text-sm font-semibold">{pick(program.degree)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">{t("label.duration")}</dt>
            <dd className="mt-1 text-sm font-semibold text-muted-foreground">—</dd>
          </div>
        </dl>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {blocks.map((block) => (
            <section key={block.title}>
              <h2 className="text-lg font-bold">{block.title}</h2>
              <ul className="mt-3 space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/admission"
            className="inline-flex h-12 items-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground"
          >
            {t("cta.startJourney")}
          </Link>
          {college ? (
            <Link
              to="/colleges/$slug"
              params={{ slug: college.slug }}
              className="inline-flex h-12 items-center rounded-xl border border-border px-6 text-sm font-semibold"
            >
              {t("cta.exploreCollege")}
            </Link>
          ) : null}
        </div>
      </Container>

      {related.length ? (
        <section className="bg-surface/50 py-14">
          <Container>
            <SectionHeader title={t("label.related")} />
            <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {related.map((p) => (
                <ProgramRow key={p.slug} program={p} />
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}

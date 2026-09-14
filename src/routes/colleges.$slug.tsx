import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { getCollege } from "@/data/colleges";
import { programsByCollege } from "@/data/programs";
import { news } from "@/data/news";
import { Container, Reveal, SectionHeader } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";
import { NewsCard, ProgramRow } from "@/components/site/cards";

export const Route = createFileRoute("/colleges/$slug")({
  loader: ({ params }) => {
    const college = getCollege(params.slug);
    if (!college) throw notFound();
    return { college };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "الكلية غير موجودة" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.college.name.ar} | جامعة الرشيد الذكية`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.college.short.ar },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.college.short.ar },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/colleges/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/colleges/${params.slug}` }],
    };
  },
  component: CollegePage,
});

function CollegePage() {
  const { college } = Route.useLoaderData();
  const { pick, t, locale } = useI18n();
  const list = programsByCollege(college.slug);
  const related = news.slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={t("nav.colleges")}
        title={pick(college.name)}
        description={pick(college.short)}
        breadcrumbs={[
          { label: locale === "ar" ? "الكليات" : "Colleges", to: "/colleges" },
          { label: pick(college.name) },
        ]}
      />

      <Container className="py-12 md:py-16">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={college.image}
            alt={pick(college.imageAlt)}
            loading="lazy"
            width={1280}
            height={854}
            className="aspect-[21/9] w-full object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <section>
            <h2 className="text-xl font-bold">{locale === "ar" ? "نبذة عن الكلية" : "Overview"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {pick(college.overview)}
            </p>

            <h2 className="mt-10 text-xl font-bold">{t("label.programs")}</h2>
            {list.length ? (
              <ul className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {list.map((program) => (
                  <ProgramRow key={program.slug} program={program} />
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-muted-foreground">{t("empty.programs")}</p>
            )}
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-base font-bold">{locale === "ar" ? "المرافق" : "Facilities"}</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {pick(college.facilities).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
              <h2 className="text-base font-bold">{t("cta.apply")}</h2>
              <p className="mt-2 text-sm opacity-90">
                {locale === "ar"
                  ? "ابدأ خطوات الالتحاق بهذه الكلية."
                  : "Begin the admission steps for this college."}
              </p>
              <Link
                to="/admission"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-accent px-5 text-sm font-semibold text-accent-foreground"
              >
                {t("cta.startJourney")}
              </Link>
            </div>
          </aside>
        </div>
      </Container>

      <section className="bg-surface/50 py-14">
        <Container>
          <SectionHeader title={t("label.relatedNews")} />
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((item, i) => (
              <Reveal key={item.slug} delay={i * 70}>
                <NewsCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

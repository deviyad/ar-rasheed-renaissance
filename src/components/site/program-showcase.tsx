import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { colleges, getCollege } from "@/data/colleges";
import { programsByCollege } from "@/data/programs";
import { cn } from "@/lib/utils";
import { Container, Eyebrow, Reveal } from "./primitives";

/**
 * Coursera-style showcase: tab buttons per college; switching tabs swaps
 * a grid of image cards with descriptive titles and per-card CTA buttons.
 */
export function ProgramShowcase() {
  const { pick, t, locale } = useI18n();
  const [active, setActive] = useState(colleges[0]!.slug);
  const college = getCollege(active);
  const list = programsByCollege(active);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Eyebrow>{locale === "ar" ? "برامج مميزة" : "Featured programs"}</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
              {locale === "ar"
                ? "اختر الكلية واستكشف برامجها"
                : "Pick a college, explore its programs"}
            </h2>
          </div>
        </div>

        {/* Changing tab buttons */}
        <div
          role="tablist"
          aria-label={locale === "ar" ? "الكليات" : "Colleges"}
          className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1"
        >
          {colleges.map((c) => {
            const selected = c.slug === active;
            return (
              <button
                key={c.slug}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(c.slug)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  selected
                    ? "border-primary bg-primary text-primary-foreground shadow-soft"
                    : "border-border bg-card text-foreground hover:border-primary/50 hover:text-primary",
                )}
              >
                {pick(c.name)}
              </button>
            );
          })}
        </div>

        {/* Program cards */}
        <div
          role="tabpanel"
          key={active}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((program, i) => (
            <Reveal key={program.slug} delay={i * 70}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
                <Link
                  to="/programs/$slug"
                  params={{ slug: program.slug }}
                  className="relative block aspect-[16/9] overflow-hidden"
                >
                  <img
                    src={college?.image}
                    alt={college ? pick(college.imageAlt) : ""}
                    loading="lazy"
                    width={1280}
                    height={854}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/25 to-transparent" />
                  <span className="absolute bottom-3 start-4 end-4">
                    <span className="text-[0.7rem] font-medium uppercase tracking-wider text-accent">
                      {pick(program.degree)}
                    </span>
                    <h3 className="mt-1 text-base font-bold text-on-dark md:text-lg">
                      {pick(program.name)}
                    </h3>
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pick(program.summary)}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <Link
                      to="/programs/$slug"
                      params={{ slug: program.slug }}
                      className="inline-flex h-10 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      {t("cta.discoverMore")}
                      <Arrow aria-hidden="true" className="size-3.5" />
                    </Link>
                    <Link
                      to="/admission"
                      className="text-xs font-semibold text-primary underline-offset-4 hover:underline"
                    >
                      {t("cta.startJourney")}
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

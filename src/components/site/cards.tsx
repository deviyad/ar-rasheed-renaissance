import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Announcement, College, EventItem, NewsItem, Person, Program } from "@/data/types";
import { getCollege } from "@/data/colleges";
import { ArrowLink } from "./primitives";

export function StatCard({
  label,
  value,
}: {
  label: string;
  value: number | null;
}) {
  const { formatNumber } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === null) return;
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const duration = 1100;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="border-border px-5 py-6 text-center sm:text-start">
      <p className="text-3xl font-bold text-primary md:text-4xl">
        {value === null ? "—" : formatNumber(display)}
      </p>
      <p className="mt-2 text-xs text-muted-foreground md:text-sm">{label}</p>
    </div>
  );
}

export function CollegeCard({ college, className }: { college: College; className?: string }) {
  const { pick, t } = useI18n();
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift",
        className,
      )}
    >
      <Link
        to="/colleges/$slug"
        params={{ slug: college.slug }}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <img
          src={college.image}
          alt={pick(college.imageAlt)}
          loading="lazy"
          width={1280}
          height={854}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent opacity-70" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold md:text-lg">{pick(college.name)}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {pick(college.short)}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {college.programSlugs.length} {t("label.programs")}
          </span>
          <ArrowLink to="/colleges/$slug" params={{ slug: college.slug }}>
            {t("cta.exploreCollege")}
          </ArrowLink>
        </div>
      </div>
    </article>
  );
}

export function ProgramRow({ program }: { program: Program }) {
  const { pick } = useI18n();
  const college = getCollege(program.collegeSlug);
  return (
    <li>
      <Link
        to="/programs/$slug"
        params={{ slug: program.slug }}
        className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-muted/60"
      >
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold md:text-base">{pick(program.name)}</p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {college ? pick(college.name) : ""} · {pick(program.degree)}
          </p>
        </div>
        <span className="hidden max-w-sm truncate text-xs text-muted-foreground lg:block">
          {pick(program.summary)}
        </span>
      </Link>
    </li>
  );
}

export function NewsCard({
  item,
  variant = "default",
}: {
  item: NewsItem;
  variant?: "default" | "featured" | "compact";
}) {
  const { pick, formatDate, t } = useI18n();

  if (variant === "compact") {
    return (
      <article className="border-b border-border py-4 last:border-0">
        <Link to="/news/$slug" params={{ slug: item.slug }} className="group block">
          <div className="flex items-center gap-2 text-[0.7rem] text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
              {pick(item.category)}
            </span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </div>
          <h3 className="mt-2 text-sm font-semibold leading-snug group-hover:text-primary">
            {pick(item.title)}
          </h3>
        </Link>
      </article>
    );
  }

  const featured = variant === "featured";
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift",
        featured && "lg:flex-row",
      )}
    >
      <Link
        to="/news/$slug"
        params={{ slug: item.slug }}
        className={cn("block overflow-hidden", featured ? "lg:w-3/5" : "")}
      >
        <img
          src={item.image}
          alt={pick(item.imageAlt)}
          loading="lazy"
          width={1280}
          height={854}
          className={cn(
            "w-full object-cover transition-transform duration-700 group-hover:scale-105",
            featured ? "aspect-[16/10] lg:h-full" : "aspect-[16/10]",
          )}
        />
      </Link>
      <div className={cn("flex flex-1 flex-col p-5", featured && "lg:justify-center lg:p-8")}>
        <div className="flex items-center gap-2 text-[0.7rem] text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
            {pick(item.category)}
          </span>
          <time dateTime={item.date}>{formatDate(item.date)}</time>
        </div>
        <h3
          className={cn(
            "mt-3 font-bold leading-snug",
            featured ? "text-xl md:text-2xl" : "text-base",
          )}
        >
          <Link to="/news/$slug" params={{ slug: item.slug }} className="hover:text-primary">
            {pick(item.title)}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(item.excerpt)}</p>
        <ArrowLink to="/news/$slug" params={{ slug: item.slug }} className="mt-4">
          {t("cta.readMore")}
        </ArrowLink>
      </div>
    </article>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  const { pick, formatDate } = useI18n();
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <span className="inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-[0.7rem] font-medium text-accent-foreground">
        {pick(event.category)}
      </span>
      <h3 className="mt-3 text-base font-bold">{pick(event.title)}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(event.description)}</p>
      <dl className="mt-4 space-y-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <CalendarDays aria-hidden="true" className="size-4" />
          <dd>
            <time dateTime={event.date}>{formatDate(event.date)}</time>
          </dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock aria-hidden="true" className="size-4" />
          <dd>{pick(event.time)}</dd>
        </div>
        <div className="flex items-center gap-2">
          <MapPin aria-hidden="true" className="size-4" />
          <dd>{pick(event.location)}</dd>
        </div>
      </dl>
    </article>
  );
}

export function AnnouncementCard({ item }: { item: Announcement }) {
  const { pick, formatDate } = useI18n();
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-card p-5",
        item.level === "important" && "border-accent/60 bg-accent/5",
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-sm font-bold md:text-base">{pick(item.title)}</h3>
        <time dateTime={item.date} className="text-xs text-muted-foreground">
          {formatDate(item.date)}
        </time>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(item.body)}</p>
    </article>
  );
}

export function PersonCard({ person }: { person: Person }) {
  const { pick } = useI18n();
  return (
    <article className="rounded-2xl border border-border bg-card p-5">
      <div
        aria-hidden="true"
        className="mb-4 grid size-14 place-items-center rounded-full bg-muted text-sm font-bold text-muted-foreground"
      >
        {pick(person.role).slice(0, 1)}
      </div>
      <h3 className="text-base font-bold">{pick(person.name)}</h3>
      <p className="mt-1 text-xs text-muted-foreground">{pick(person.role)}</p>
      {person.message ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pick(person.message)}</p>
      ) : null}
    </article>
  );
}

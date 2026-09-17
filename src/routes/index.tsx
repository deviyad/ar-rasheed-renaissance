import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Building2,
  Cpu,
  FlaskConical,
  Languages,
  Users,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/assets/campus-hero.jpg";
import classroom from "@/assets/campus-classroom.jpg";
import library from "@/assets/campus-library.jpg";
import studentLife from "@/assets/student-life.jpg";
import { useI18n } from "@/lib/i18n";
import { university } from "@/data/university";
import { colleges } from "@/data/colleges";
import { programs } from "@/data/programs";
import { announcements, news } from "@/data/news";
import { Container, Reveal, SectionHeader, ArrowLink, Eyebrow, DemoNotice } from "@/components/site/primitives";
import {
  AnnouncementCard,
  CollegeCard,
  NewsCard,
  ProgramRow,
  StatCard,
} from "@/components/site/cards";
import { ProgramShowcase } from "@/components/site/program-showcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "جامعة الرشيد الذكية | نصنع المعرفة ونُمكّن المستقبل" },
      {
        name: "description",
        content:
          "الموقع الرسمي لجامعة الرشيد الذكية: الكليات والبرامج الأكاديمية، القبول والتسجيل، الحياة الجامعية، البحث والابتكار، والأخبار.",
      },
      { property: "og:title", content: "جامعة الرشيد الذكية" },
      {
        property: "og:description",
        content: "بيئة أكاديمية ذكية تجمع بين التميّز العلمي والتقنيات الحديثة والتعلّم التطبيقي.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const icons: Record<string, LucideIcon> = {
  building: Building2,
  cpu: Cpu,
  users: Users,
  book: BookOpen,
  flask: FlaskConical,
  languages: Languages,
};

function HomePage() {
  const { pick, t, locale } = useI18n();
  const featured = (news.find((n) => n.featured) ?? news[0])!;
  const rest = news.filter((n) => n.slug !== featured.slug).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-primary-deep">
        <img
          src={heroImage}
          alt={
            locale === "ar"
              ? "حرم جامعة حديث وقت الغروب وطلبة يسيرون في الساحة"
              : "A modern university campus at sunset with students crossing the plaza"
          }
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/80 to-primary-deep/35"
        />
        <Container className="relative py-20 md:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {pick(university.name)}
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-[1.2] text-on-dark md:text-6xl">
              {pick(university.tagline)}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-on-dark/80 md:text-lg">
              {pick(university.intro)}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("cta.explorePrograms")}
              </Link>
              <Link
                to="/admission"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-on-dark/35 px-6 text-sm font-semibold text-on-dark transition-colors hover:bg-on-dark/10"
              >
                {t("cta.startJourney")}
              </Link>
            </div>
          </div>

          {/* Floating academic card */}
          <div className="mt-12 max-w-md rounded-2xl border border-on-dark/20 bg-background/90 p-5 shadow-lift backdrop-blur-md lg:absolute lg:bottom-16 lg:end-12 lg:mt-0">
            <Eyebrow>{t("cta.guide")}</Eyebrow>
            <p className="mt-2 text-base font-bold">{pick(university.shortName)}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {locale === "ar"
                ? "تعرّف على خطوات الالتحاق والمستندات المطلوبة."
                : "Review the application steps and required documents."}
            </p>
            <ArrowLink to="/admission" className="mt-3">
              {t("cta.discoverMore")}
            </ArrowLink>
          </div>
        </Container>
      </section>

      {/* SNAPSHOT */}
      <section aria-label={t("nav.about")} className="border-b border-border bg-surface/50">
        <Container className="py-4">
          <div className="grid grid-cols-2 divide-border sm:grid-cols-4 sm:divide-x sm:rtl:divide-x-reverse">
            {university.stats.map((stat) => (
              <StatCard key={stat.key} label={pick(stat.label)} value={stat.value} />
            ))}
          </div>
          <DemoNotice className="mb-4" />
        </Container>
      </section>

      {/* WHY AR-RASHEED — editorial split */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <Eyebrow>{locale === "ar" ? "لماذا الرشيد" : "Why Ar-Rasheed"}</Eyebrow>
              <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
                {locale === "ar"
                  ? "تجربة جامعية مبنية على التقنية والممارسة"
                  : "A university experience built on technology and practice"}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {pick(university.mission)}
              </p>
              <ArrowLink to="/about" className="mt-6">
                {t("nav.about")}
              </ArrowLink>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <img
                  src={classroom}
                  alt={
                    locale === "ar"
                      ? "قاعة دراسية ذكية مزودة بشاشة تفاعلية"
                      : "A smart classroom equipped with an interactive display"
                  }
                  loading="lazy"
                  width={1280}
                  height={854}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {university.strengths.map((item, i) => {
                const Icon = icons[item.icon] ?? Building2;
                return (
                  <Reveal key={item.icon} delay={i * 60} className="bg-card p-6">
                    <Icon aria-hidden="true" className="size-5 text-primary" />
                    <h3 className="mt-4 text-base font-bold">{pick(item.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pick(item.text)}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* COLLEGES */}
      <section className="bg-surface/50 py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow={locale === "ar" ? "الكليات" : "Colleges"}
            title={locale === "ar" ? "تعرّف على الكليات" : "Explore our colleges"}
            description={
              locale === "ar"
                ? "أربع كليات تغطي المجالات الصحية والهندسية والإدارية."
                : "Four colleges covering health, engineering and business disciplines."
            }
            action={<ArrowLink to="/colleges">{t("cta.viewAll")}</ArrowLink>}
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {colleges.map((college, i) => (
              <Reveal key={college.slug} delay={i * 70}>
                <CollegeCard college={college} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PROGRAM SHOWCASE — Coursera-style tabbed cards */}
      <ProgramShowcase />

      {/* PROGRAM EXPLORER TEASER */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow={locale === "ar" ? "البرامج الأكاديمية" : "Academic programs"}
            title={locale === "ar" ? "استكشف البرامج" : "Program explorer"}
            description={
              locale === "ar"
                ? "ابحث وصفِّ البرامج حسب الكلية والدرجة العلمية والمجال."
                : "Search and filter programs by college, degree and field."
            }
            action={<ArrowLink to="/programs">{t("cta.viewAll")}</ArrowLink>}
          />
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {programs.slice(0, 6).map((program) => (
              <ProgramRow key={program.slug} program={program} />
            ))}
          </ul>
        </Container>
      </section>

      {/* SMART CAMPUS — full-bleed photography */}
      <section className="relative isolate overflow-hidden bg-primary-deep py-16 md:py-24">
        <img
          src={library}
          alt={
            locale === "ar" ? "مكتبة جامعية حديثة وطلبة يدرسون" : "A modern university library"
          }
          loading="lazy"
          width={1280}
          height={854}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow>{locale === "ar" ? "الحرم الذكي" : "Smart campus"}</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-on-dark md:text-4xl">
              {locale === "ar" ? "مرافق تدعم التعلّم العملي" : "Facilities that support hands-on learning"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-dark/80 md:text-base">
              {locale === "ar"
                ? "مختبرات وقاعات ذكية ومكتبة ومصادر رقمية ضمن بيئة جامعية متكاملة."
                : "Laboratories, smart classrooms, a library and digital resources within an integrated campus."}
            </p>
          </div>
          <div className="no-scrollbar mt-8 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {[
              { img: classroom, ar: "القاعات الذكية", en: "Smart classrooms" },
              { img: library, ar: "المكتبة ومصادر التعلّم", en: "Library & learning resources" },
              { img: studentLife, ar: "الأنشطة والفعاليات", en: "Activities & events" },
            ].map((card) => (
              <figure
                key={card.en}
                className="w-[80%] shrink-0 overflow-hidden rounded-2xl border border-on-dark/15 bg-background/10 md:w-auto"
              >
                <img
                  src={card.img}
                  alt={locale === "ar" ? card.ar : card.en}
                  loading="lazy"
                  width={1280}
                  height={854}
                  className="aspect-[16/10] w-full object-cover"
                />
                <figcaption className="p-4 text-sm font-semibold text-on-dark">
                  {locale === "ar" ? card.ar : card.en}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* NEWS + ANNOUNCEMENTS */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader
            eyebrow={locale === "ar" ? "المستجدات" : "Newsroom"}
            title={locale === "ar" ? "آخر الأخبار" : "Latest news"}
            action={<ArrowLink to="/news">{t("cta.allNews")}</ArrowLink>}
          />
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <NewsCard item={featured} variant="featured" />
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {t("search.groups.news")}
              </h3>
              <div className="mt-2">
                {rest.map((item) => (
                  <NewsCard key={item.slug} item={item} variant="compact" />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <SectionHeader
              eyebrow={locale === "ar" ? "إعلانات" : "Notices"}
              title={t("search.groups.announcements")}
              action={<ArrowLink to="/announcements">{t("cta.viewAll")}</ArrowLink>}
            />
            <div className="grid gap-4 md:grid-cols-3">
              {announcements.map((item) => (
                <AnnouncementCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ADMISSION CTA */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {t("nav.admission")}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold md:text-5xl">
            {locale === "ar" ? "مستقبلك يبدأ بخطوة" : "Your future starts with one step"}
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admission"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground"
            >
              {t("cta.startJourney")}
            </Link>
            <Link
              to="/admission"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-primary-foreground/40 px-6 text-sm font-semibold"
            >
              {t("cta.guide")}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

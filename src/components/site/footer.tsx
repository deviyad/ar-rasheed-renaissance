import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useI18n, type UiKey } from "@/lib/i18n";
import { university } from "@/data/university";
import { Container } from "./primitives";

type Column = { title: UiKey; links: { key: UiKey; to: string }[] };

const columns: Column[] = [
  {
    title: "footer.university",
    links: [
      { key: "nav.about", to: "/about" },
      { key: "nav.research", to: "/research" },
      { key: "nav.contact", to: "/contact" },
    ],
  },
  {
    title: "footer.academics",
    links: [
      { key: "nav.colleges", to: "/colleges" },
      { key: "label.programs", to: "/programs" },
      { key: "nav.life", to: "/student-life" },
    ],
  },
  {
    title: "footer.admissions",
    links: [
      { key: "cta.apply", to: "/admission" },
      { key: "cta.guide", to: "/admission" },
      { key: "search.groups.announcements", to: "/announcements" },
    ],
  },
  {
    title: "footer.resources",
    links: [
      { key: "search.groups.news", to: "/news" },
      { key: "search.groups.events", to: "/events" },
      { key: "search.label", to: "/search" },
    ],
  },
];

export function Footer() {
  const { t, pick } = useI18n();
  return (
    <footer className="mt-20 bg-primary-deep text-on-dark/80">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="text-base font-bold text-on-dark">{pick(university.name)}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">{pick(university.intro)}</p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={t(col.title)}>
              <h2 className="mb-3 text-sm font-semibold text-on-dark">{t(col.title)}</h2>
              <ul className="space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.key}`}>
                    <Link
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      to={link.to as any}
                      className="transition-colors hover:text-on-dark"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="mb-3 text-sm font-semibold text-on-dark">{t("footer.contact")}</h2>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                <span>{pick(university.contact.address)}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="size-4 shrink-0" />
                <span>{university.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail aria-hidden="true" className="size-4 shrink-0" />
                <span>{university.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-on-dark/15 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {pick(university.name)} — {t("footer.rights")}
          </p>
          <div className="flex flex-wrap gap-4">
            <span>{t("footer.privacy")}</span>
            <span>{t("footer.terms")}</span>
            <span>{t("footer.a11y")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

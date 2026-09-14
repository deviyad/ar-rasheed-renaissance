import { useCallback, useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useI18n, type UiKey } from "@/lib/i18n";
import { university } from "@/data/university";
import { cn } from "@/lib/utils";
import { Container } from "./primitives";
import { LanguageSwitcher, ThemeSwitcher } from "./switchers";
import { SearchDialog, useSearchShortcut } from "./search-dialog";

type NavItem = { key: UiKey; to: string };

const navItems: NavItem[] = [
  { key: "nav.about", to: "/about" },
  { key: "nav.colleges", to: "/colleges" },
  { key: "nav.admission", to: "/admission" },
  { key: "nav.life", to: "/student-life" },
  { key: "nav.research", to: "/research" },
  { key: "nav.news", to: "/news" },
];

function Logo({ onNavigate }: { onNavigate?: () => void }) {
  const { pick, locale } = useI18n();
  return (
    <Link to="/" onClick={onNavigate} className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground"
      >
        {locale === "ar" ? "ر" : "AR"}
      </span>
      <span className="leading-tight">
        <span className="block text-[0.8rem] font-bold md:text-sm">{pick(university.name)}</span>
        <span className="block text-[0.6rem] text-muted-foreground md:text-[0.65rem]">
          {locale === "ar" ? university.name.en : university.name.ar}
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useSearchShortcut(useCallback(() => setSearchOpen(true), []));

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-primary-deep text-[0.72rem] text-on-dark/85 md:block">
        <Container className="flex h-9 items-center justify-between">
          <Link to="/announcements" className="flex items-center gap-2 hover:text-on-dark">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {t("nav.news")}
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-on-dark">
              {t("nav.contact")}
            </Link>
            <Link to="/admission" className="hover:text-on-dark">
              {t("cta.guide")}
            </Link>
          </div>
        </Container>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md transition-[height,box-shadow] duration-300",
          scrolled && "shadow-soft",
        )}
      >
        <Container
          className={cn(
            "flex items-center justify-between gap-3 transition-[height] duration-300",
            scrolled ? "h-14" : "h-16 md:h-20",
          )}
        >
          <Logo />

          <nav aria-label={t("nav.menu")} className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={item.to as any}
                activeProps={{ className: "text-primary" }}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={t("search.label")}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border/70 transition-colors hover:bg-muted"
            >
              <Search aria-hidden="true" className="size-4" />
            </button>
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <Link
              to="/admission"
              className="hidden h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep md:inline-flex"
            >
              {t("cta.apply")}
            </Link>

            {/* Mobile menu */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger
                aria-label={t("nav.menu")}
                className="inline-flex size-10 items-center justify-center rounded-lg border border-border/70 lg:hidden"
              >
                <Menu aria-hidden="true" className="size-5" />
              </SheetTrigger>
              <SheetContent side="top" className="h-dvh overflow-y-auto p-0">
                <SheetTitle className="sr-only">{t("nav.menu")}</SheetTitle>
                <div className="flex h-16 items-center justify-between border-b border-border px-4">
                  <Logo onNavigate={() => setMenuOpen(false)} />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label={t("nav.close")}
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-border/70"
                  >
                    <X aria-hidden="true" className="size-5" />
                  </button>
                </div>
                <div className="space-y-6 px-4 py-6">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setSearchOpen(true);
                    }}
                    className="flex w-full items-center gap-2.5 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <Search aria-hidden="true" className="size-4" />
                    {t("search.placeholder")}
                  </button>

                  <nav aria-label={t("nav.menu")} className="divide-y divide-border border-y border-border">
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        to={item.to as any}
                        onClick={() => setMenuOpen(false)}
                        className="block py-4 text-base font-semibold"
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                    <Link
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-base font-semibold"
                    >
                      {t("nav.contact")}
                    </Link>
                  </nav>

                  <div className="flex items-center gap-2">
                    <LanguageSwitcher className="flex-1 justify-center" />
                    <ThemeSwitcher />
                  </div>

                  <div className="space-y-2">
                    <Link
                      to="/admission"
                      onClick={() => setMenuOpen(false)}
                      className="flex h-12 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
                    >
                      {t("cta.apply")}
                    </Link>
                    <a
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="flex h-12 items-center justify-center rounded-xl border border-border text-sm font-semibold"
                    >
                      {t("cta.portal")}
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}

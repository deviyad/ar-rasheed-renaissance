import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useI18n, type UiKey } from "@/lib/i18n";
import { searchSite, type SearchGroup } from "@/data/search";

const groupOrder: SearchGroup[] = [
  "pages",
  "colleges",
  "programs",
  "news",
  "events",
  "announcements",
];

const groupKey: Record<SearchGroup, UiKey> = {
  pages: "search.groups.pages",
  colleges: "search.groups.colleges",
  programs: "search.groups.programs",
  news: "search.groups.news",
  events: "search.groups.events",
  announcements: "search.groups.announcements",
};

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { t, pick } = useI18n();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => searchSite(query), [query]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="top-[10%] max-w-2xl translate-y-0 gap-0 overflow-hidden p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{t("search.title")}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search.placeholder")}
            aria-label={t("search.label")}
            className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {!query.trim() ? (
            <p className="p-6 text-center text-sm text-muted-foreground">{t("search.hint")}</p>
          ) : results.length === 0 ? (
            <p className="p-6 text-center text-sm text-muted-foreground">{t("search.empty")}</p>
          ) : (
            groupOrder.map((group) => {
              const items = results.filter((r) => r.group === group);
              if (!items.length) return null;
              return (
                <section key={group} className="mb-2">
                  <h3 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t(groupKey[group])}
                  </h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item.id}>
                        <Link
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          to={item.to as any}
                          params={item.params as never}
                          onClick={() => onOpenChange(false)}
                          className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                        >
                          <span className="block text-sm font-medium">{pick(item.title)}</span>
                          <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                            {pick(item.description)}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** Registers the "/" shortcut to open site search. */
export function useSearchShortcut(onOpen: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (e.key === "/" && !typing) {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onOpen]);
}

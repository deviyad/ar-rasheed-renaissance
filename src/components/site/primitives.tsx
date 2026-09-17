import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";

/** Page-width container. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

/** Scroll-reveal wrapper (no-op under prefers-reduced-motion, handled in CSS). */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
  align = "start",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
        <h2 className="text-2xl font-bold leading-tight md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

/** Inline "more" link with a direction-aware chevron. */
export function ArrowLink({
  to,
  params,
  children,
  className,
}: {
  to: string;
  params?: Record<string, string>;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      params={params as never}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent",
        className,
      )}
    >
      {children}
      <ChevronLeft
        aria-hidden="true"
        className="size-4 rtl-flip transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5"
      />
    </Link>
  );
}

/** Small banner marking demo content that the university will replace. */
export function DemoNotice({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <p
      className={cn(
        "rounded-lg border border-dashed border-border bg-muted/60 px-3 py-2 text-xs text-muted-foreground",
        className,
      )}
    >
      {t("notice.content")}
    </p>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string; params?: Record<string, string> }[] }) {
  const { t } = useI18n();
  return (
    <nav aria-label="breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/" className="hover:text-foreground">
            {t("label.home")}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronLeft aria-hidden="true" className="size-3 rtl-flip opacity-60" />
            {item.to && i < items.length - 1 ? (
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={item.to as any}
                params={item.params as never}
                className="hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

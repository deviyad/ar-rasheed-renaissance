import type { ReactNode } from "react";
import { Container, Breadcrumbs, Eyebrow } from "./primitives";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  children,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: { label: string; to?: string; params?: Record<string, string> }[];
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface/60">
      <Container className="py-10 md:py-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="mt-5 max-w-3xl">
          {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
          <h1 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

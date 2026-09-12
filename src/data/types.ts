import type { Localized, LocalizedList } from "@/lib/i18n";

export type { Localized, LocalizedList };

export type College = {
  slug: string;
  name: Localized;
  short: Localized;
  overview: Localized;
  image: string;
  imageAlt: Localized;
  field: "medical" | "engineering" | "business";
  facilities: LocalizedList;
  programSlugs: string[];
};

export type Program = {
  slug: string;
  name: Localized;
  collegeSlug: string;
  degree: Localized;
  field: "medical" | "engineering" | "business";
  summary: Localized;
  objectives: LocalizedList;
  careers: LocalizedList;
  structure: LocalizedList;
  requirements: LocalizedList;
};

export type NewsItem = {
  slug: string;
  title: Localized;
  excerpt: Localized;
  body: LocalizedList;
  category: Localized;
  categoryKey: string;
  date: string;
  image: string;
  imageAlt: Localized;
  featured?: boolean;
};

export type EventItem = {
  slug: string;
  title: Localized;
  description: Localized;
  date: string;
  time: Localized;
  location: Localized;
  category: Localized;
  registration?: boolean;
};

export type Announcement = {
  id: string;
  title: Localized;
  body: Localized;
  date: string;
  level: "info" | "important";
};

export type Person = {
  id: string;
  name: Localized;
  role: Localized;
  message?: Localized;
};

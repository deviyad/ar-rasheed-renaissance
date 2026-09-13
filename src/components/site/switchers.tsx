import { Languages, Monitor, Moon, Sun } from "lucide-react";
import { useI18n, type Locale } from "@/lib/i18n";
import { useTheme, type ThemeMode } from "@/lib/theme";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();
  const options: { value: Locale; label: string }[] = [
    { value: "ar", label: "العربية" },
    { value: "en", label: "English" },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("lang.label")}
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-lg border border-border/70 px-2.5 text-xs font-medium transition-colors hover:bg-muted",
          className,
        )}
      >
        <Languages aria-hidden="true" className="size-4" />
        <span>{locale === "ar" ? "العربية" : "English"}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuLabel>{t("lang.label")}</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={locale} onValueChange={(v) => setLocale(v as Locale)}>
          {options.map((o) => (
            <DropdownMenuRadioItem key={o.value} value={o.value}>
              {o.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeSwitcher({ className }: { className?: string }) {
  const { mode, resolved, setMode } = useTheme();
  const { t } = useI18n();
  const items: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
    { value: "system", label: t("theme.system"), icon: Monitor },
    { value: "light", label: t("theme.light"), icon: Sun },
    { value: "dark", label: t("theme.dark"), icon: Moon },
  ];
  const Icon = resolved === "dark" ? Moon : Sun;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("theme.label")}
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-lg border border-border/70 transition-colors hover:bg-muted",
          className,
        )}
      >
        <Icon aria-hidden="true" className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuLabel>{t("theme.label")}</DropdownMenuLabel>
        {items.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onSelect={() => setMode(item.value)}
            className={cn("gap-2", mode === item.value && "font-semibold text-primary")}
          >
            <item.icon aria-hidden="true" className="size-4" />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

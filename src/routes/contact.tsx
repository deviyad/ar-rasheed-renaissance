import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { university } from "@/data/university";
import { Container, DemoNotice } from "@/components/site/primitives";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "اتصل بنا | جامعة الرشيد الذكية" },
      {
        name: "description",
        content: "بيانات التواصل مع جامعة الرشيد الذكية ونموذج إرسال الاستفسارات.",
      },
      { property: "og:title", content: "اتصل بنا | جامعة الرشيد الذكية" },
      { property: "og:description", content: "بيانات التواصل ونموذج الاستفسارات." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type Errors = { name?: string; email?: string; message?: string };

function ContactPage() {
  const { pick, t, locale } = useI18n();
  const ar = locale === "ar";
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = ar ? "الاسم مطلوب" : "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = ar ? "بريد إلكتروني غير صالح" : "Enter a valid email address";
    if (message.length < 10)
      next.message = ar ? "الرسالة قصيرة جداً (10 أحرف على الأقل)" : "Message is too short (min 10 characters)";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus-visible:border-primary";

  const details = [
    { icon: MapPin, label: ar ? "العنوان" : "Address", value: pick(university.contact.address) },
    { icon: Phone, label: ar ? "الهاتف" : "Phone", value: university.contact.phone },
    { icon: Mail, label: ar ? "البريد الإلكتروني" : "Email", value: university.contact.email },
    { icon: Clock, label: ar ? "أوقات العمل" : "Hours", value: pick(university.contact.hours) },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("nav.contact")}
        title={ar ? "تواصل معنا" : "Get in touch"}
        description={
          ar
            ? "أرسل استفسارك وسيتم توجيهه إلى الجهة المختصة بالجامعة."
            : "Send your enquiry and it will be routed to the relevant university office."
        }
        breadcrumbs={[{ label: t("nav.contact") }]}
      />

      <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <ul className="space-y-4">
            {details.map((d) => (
              <li key={d.label} className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                <d.icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                  <p className="mt-1 text-sm font-medium">{d.value}</p>
                </div>
              </li>
            ))}
          </ul>
          <DemoNotice className="mt-5" />
        </div>

        <form noValidate onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-xl font-bold">{ar ? "نموذج الاستفسار" : "Enquiry form"}</h2>

          {sent ? (
            <p
              role="status"
              className="mt-4 flex items-center gap-2 rounded-xl border border-accent/50 bg-accent/10 px-4 py-3 text-sm"
            >
              <CheckCircle2 aria-hidden="true" className="size-4 text-accent" />
              {ar
                ? "تم استلام رسالتك (عرض تجريبي — لا يتم الإرسال فعلياً)."
                : "Your message was captured (demo only — nothing is sent yet)."}
            </p>
          ) : null}

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                {ar ? "الاسم الكامل" : "Full name"}
              </label>
              <input
                id="name"
                name="name"
                className={field}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="mt-1.5 text-xs text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                {ar ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                dir="ltr"
                className={field}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="mt-1.5 text-xs text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium">
                {ar ? "الموضوع" : "Subject"}
              </label>
              <input id="subject" name="subject" className={field} />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                {ar ? "الرسالة" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={field}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="mt-1.5 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
          >
            {ar ? "إرسال الاستفسار" : "Send enquiry"}
          </button>
        </form>
      </Container>
    </>
  );
}

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, Section } from "@/components/Reveal";

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof values) => (v: string) =>
    setValues((s) => ({ ...s, [k]: v }));

  function validate(): Errors {
    const e: Errors = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    else if (values.name.trim().length > 100) e.name = "Name is too long.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!values.subject.trim()) e.subject = "Please enter a subject.";
    else if (values.subject.trim().length > 150)
      e.subject = "Subject is too long.";
    if (!values.message.trim()) e.message = "Please enter a message.";
    else if (values.message.trim().length > 2000)
      e.message = "Message is too long (2000 characters max).";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none";

  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="panel p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a
                    className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                    href={`mailto:${profile.email}`}
                  >
                    <Mail size={16} className="shrink-0 text-primary" aria-hidden="true" />
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a
                    className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                    href={profile.phoneHref}
                  >
                    <Phone size={16} className="shrink-0 text-primary" aria-hidden="true" />
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Location</dt>
                <dd className="inline-flex items-center gap-2">
                  <MapPin size={16} className="shrink-0 text-primary" aria-hidden="true" />
                  {profile.location}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Email me
              </a>
              <a
                href={profile.phoneHref}
                className="rounded-md border border-primary/60 px-4 py-2.5 text-sm hover:bg-primary/15"
              >
                Call me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Linkedin size={16} className="text-primary" aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Github size={16} className="text-primary" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} noValidate className="panel space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className={field}
                  value={values.name}
                  maxLength={100}
                  onChange={(e) => set("name")(e.target.value)}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  value={values.email}
                  maxLength={255}
                  onChange={(e) => set("email")(e.target.value)}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className={field}
                value={values.subject}
                maxLength={150}
                onChange={(e) => set("subject")(e.target.value)}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.subject}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={field}
                value={values.message}
                maxLength={2000}
                onChange={(e) => set("message")(e.target.value)}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
            >
              Send message
            </button>
            {sent && (
              <p className="text-sm text-muted-foreground" role="status">
                Your email app should now open with the message ready to send.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold">{profile.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {profile.headline}
          </p>
        </div>
        <div className="flex gap-5 text-sm">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground hover:text-primary"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

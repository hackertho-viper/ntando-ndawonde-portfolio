import {
  achievements,
  certifications,
  education,
  gallery,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { Reveal, Section } from "@/components/Reveal";
import { ExternalLink, Github } from "lucide-react";


export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="panel p-6">
            <h3 className="font-display text-sm uppercase tracking-[0.18em] text-primary">
              Focus areas
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {[
                "Software Development",
                "Cloud Engineering",
                "AWS",
                "Backend Development",
                "IoT",
                "Embedded Systems",
                "Automation",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="panel h-full p-6 transition-colors hover:border-primary/45">
              <h3 className="font-display text-base font-semibold">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 50}>
            <article
              className={`panel flex h-full flex-col p-6 transition-colors hover:border-primary/45 ${
                p.featured ? "border-primary/50 lg:col-span-2" : ""
              }`}
            >
              {p.featured && (
                <span className="mb-3 w-fit rounded-md bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                  Featured project
                </span>
              )}
              {p.image && (
                <img
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  loading="lazy"
                  className="mb-5 max-h-[26rem] w-full rounded-lg border border-border bg-surface-2 object-contain"
                />
              )}
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              {p.achievement && (
                <p className="mt-4 rounded-md border border-primary/35 bg-primary/10 px-3 py-2 text-sm text-foreground">
                  {p.achievement}
                </p>
              )}
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {(p.githubUrl || p.liveDemoUrl) && (
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.title === "AI Productivity Assistant (Ascent AI)" ? (
                    <>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                        >
                          <Github size={16} />
                          View on GitHub
                        </a>
                      )}
                      {p.liveDemoUrl && (
                        <a
                          href={p.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-border px-3 py-2 text-xs text-muted-foreground hover:border-primary/60 hover:text-foreground"
                        >
                          GitHub
                        </a>
                      )}
                      {p.liveDemoUrl && (
                        <a
                          href={p.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-md border border-border px-3 py-2 text-xs text-muted-foreground hover:border-primary/60 hover:text-foreground"
                        >
                          Live demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              )}

            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials">
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 60}>
            <div className="panel flex h-full flex-col p-6 transition-colors hover:border-primary/45">
              <h3 className="font-display text-base font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.year}</p>
              {c.fileUrl && (
                <a
                  href={c.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-fit rounded-md border border-primary/60 px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  View certificate
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition">
      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}>
            <div
              className={`panel h-full p-6 ${
                a.highlight ? "border-primary/55 bg-surface-2" : ""
              }`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-base font-semibold">
                  {a.title}
                </h3>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {a.year}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
              {a.image && (
                <img
                  src={a.image}
                  alt={a.imageAlt ?? a.title}
                  loading="lazy"
                  className="mt-4 max-h-[24rem] w-full rounded-lg border border-border bg-surface-2 object-contain"
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Gallery() {
  return (
    <Section id="gallery" eyebrow="Gallery" title="My Gallery">
      <div className="grid gap-5 sm:grid-cols-2">
        {gallery.map((g, i) => (
          <Reveal key={g.url} delay={i * 60}>
            <img
              src={g.url}
              alt={g.alt}
              loading="lazy"
              className="max-h-[30rem] w-full rounded-xl border border-border bg-surface-2 object-contain transition-colors hover:border-primary/45"
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Qualification">
      <Reveal>
        <div className="panel max-w-2xl p-6">
          <h3 className="font-display text-lg font-semibold">
            {education.institution}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {education.qualification}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {education.completed}
          </p>
          <a
            href={education.letterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-md border border-primary/60 px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View letter of completion
          </a>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {education.gallery.map((g) => (
              <img
                key={g.url}
                src={g.url}
                alt={g.alt}
                loading="lazy"
                className="max-h-64 w-full rounded-lg border border-border bg-surface-2 object-contain"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

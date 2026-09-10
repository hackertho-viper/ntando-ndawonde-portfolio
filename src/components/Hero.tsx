import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60rem 30rem at 15% -10%, oklch(0.256 0.052 264) 0%, transparent 65%)",
        }}
      />
      <div className="container-page relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.24em] text-primary">
            {profile.location}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View my projects
            </a>
            <a
              href={profile.cv}
              download={profile.cvFilename}
              className="inline-flex items-center rounded-md border border-primary/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/15"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              Contact me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <Linkedin size={16} className="shrink-0 text-primary" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <Github size={16} className="shrink-0 text-primary" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="justify-self-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-primary/25"
            />
            <img
              src={profile.photo}
              width={780}
              height={1035}
              alt="Portrait of Ntando Ndawonde, Computer Engineering graduate and software developer"
              className="relative h-auto max-h-[26rem] w-full max-w-[17rem] rounded-[1.75rem] bg-surface-2 object-contain shadow-2xl sm:max-w-[19rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

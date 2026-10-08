import { Entry } from "@/components/entry";
import { ProjectCard } from "@/components/project-card";
import { RichText } from "@/components/rich-text";
import { Section, SubLabel } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";

const githubHandle = DATA.github.replace(/^https?:\/\//, "");
const currentRole = DATA.work[0];
const publications = DATA.certification.filter((c) => c.kind === "publication");
const certifications = DATA.certification.filter(
  (c) => c.kind === "certification"
);

export default function Page() {
  return (
    <main className="space-y-12">
      <header
        id="hero"
        className="space-y-4 motion-safe:animate-enter"
      >
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
          <div className="space-y-2">
            <p className="font-mono text-mono text-fg-muted">
              {DATA.hero.greeting}
            </p>
            <h1 className="font-serif text-display-sm text-fg sm:text-display">
              {DATA.name}
            </h1>
          </div>
          <dl className="space-y-0.5 font-mono text-mono text-fg-muted sm:pb-1 sm:text-right">
            <dt className="sr-only">Current role</dt>
            <dd className="text-fg">{currentRole.title}</dd>
            <dd>{currentRole.company}</dd>
            <dt className="sr-only">Location</dt>
            <dd>{DATA.location}</dd>
          </dl>
        </div>

        <p className="max-w-[34rem] text-lead text-fg">{DATA.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          {DATA.hero.links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <Link
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={buttonVariants({
                  variant: link.primary ? "default" : "outline",
                  size: "sm",
                })}
              >
                {link.icon && <link.icon className="size-4" />}
                {link.label}
              </Link>
            );
          })}
        </div>
      </header>

      <Section
        id="projects"
        label={DATA.sections.projects.label}
        count={DATA.projects.length}
        className="motion-safe:animate-enter [animation-delay:60ms]"
      >
        <p className="-mt-1 mb-4 text-body-sm text-fg-muted">
          {DATA.sections.projects.intro}
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project) => (
            <ProjectCard
              key={project.title}
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              stackLabel={DATA.sections.projects.stackLabel}
              links={project.links}
            />
          ))}
        </div>
        <p className="mt-6 text-body-sm text-fg-muted">
          {DATA.sections.projects.seeAll}{" "}
          <Link
            href={DATA.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-mono text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-150 hover:decoration-accent"
          >
            {githubHandle}
            <span aria-hidden> ↗</span>
          </Link>
        </p>
      </Section>

      <Section id="about" label={DATA.sections.about.label}>
        <RichText className="max-w-prose text-body text-fg-muted">
          {DATA.summary}
        </RichText>
      </Section>

      <Section
        id="publications"
        label={DATA.sections.publications.label}
        count={publications.length}
      >
        <div className="space-y-6">
          {publications.map((item) => (
            <Entry
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              period={item.start}
              href={item.href}
            />
          ))}
        </div>
        <SubLabel className="mb-4 mt-10">
          {DATA.sections.publications.certificationLabel}
        </SubLabel>
        <div className="space-y-6">
          {certifications.map((item) => (
            <Entry
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              period={item.start}
              href={item.href}
            />
          ))}
        </div>
      </Section>

      <Section id="work" label={DATA.sections.work.label}>
        <div className="space-y-6">
          {DATA.work.map((work) => (
            <Entry
              key={work.company}
              title={work.company}
              subtitle={work.title}
              period={`${work.start} – ${work.end}`}
              href={work.href}
              description={work.description}
            />
          ))}
        </div>
      </Section>

      <Section id="skills" label={DATA.sections.skills.label}>
        <ul className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-mono text-fg">
          {DATA.skills.map((skill) => (
            <li
              key={skill}
              className="after:ml-2 after:text-fg-muted after:content-['/'] last:after:content-none"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" label={DATA.sections.education.label}>
        <div className="space-y-6">
          {DATA.education.map((education) => (
            <Entry
              key={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} – ${education.end}`}
              href={education.href}
              description={education.description}
            />
          ))}
        </div>
      </Section>

      <Section id="contact" label={DATA.sections.contact.label}>
        <h3 className="mb-2 text-heading font-semibold text-fg">
          {DATA.sections.contact.heading}
        </h3>
        <RichText className="max-w-prose text-body text-fg-muted">
          {DATA.sections.contact.body}
        </RichText>
      </Section>
    </main>
  );
}

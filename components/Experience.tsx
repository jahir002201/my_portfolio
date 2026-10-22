
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const technologies = [
  "Full-Stack Development",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "AJAX",
  "PHP",
  "Laravel",
  "SQL",
  "MySQL",
  "Git & GitHub",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Career Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Professional Experience
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            My professional journey in full-stack development,
            backend engineering, and production-ready web applications.
          </p>
        </div>

        <div className="relative border-l border-border pl-6 md:pl-10">
          <article className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8">
            <span className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-background bg-primary md:-left-[49px]" />

            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Professional Experience
                </span>

                <h3 className="text-xl font-bold md:text-2xl">
                  Full-Stack Developer
                </h3>

                <p className="mt-2 flex items-center gap-2 font-medium text-primary">
                  <BriefcaseBusiness size={17} />
                  Synex Digital
                </p>
              </div>

              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  Mar 2023 – Oct 2024
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            <p className="mt-6 leading-7 text-muted-foreground">
              Worked on full-stack web development, building and
              maintaining production applications using Laravel,
              PHP, SQL, and modern frontend technologies.
            </p>

            <div className="mt-6">
              <h4 className="mb-4 font-semibold">
                Key Responsibilities
              </h4>

              <ul className="space-y-3">
                {[
                  "Built and maintained web applications using Laravel, PHP, and SQL.",
                  "Developed interactive frontend interfaces using HTML, CSS, Bootstrap, and JavaScript.",
                  "Implemented dynamic features using jQuery and AJAX.",
                  "Designed and maintained relational databases using SQL and MySQL.",
                  "Developed backend functionality following MVC architecture and REST API principles.",
                  "Used Git and GitHub for version control and collaborative development.",
                  "Deployed applications on AWS EC2 using Linux and Nginx.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-muted-foreground md:text-base"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <h4 className="mb-4 font-semibold">
                Technologies & Skills
              </h4>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
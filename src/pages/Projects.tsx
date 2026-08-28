import PageShell from "../components/PageShell";
import { useToggleMode } from "../context/ModeToggle.jsx";
import { projects } from "../data/resume";

export default function Projects() {

    const {isOn} = useToggleMode();

  return (
    <PageShell
      eyebrow="Selected work"
      title="Two products, shipped end-to-end."
      intro="Full-stack builds spanning API design, data, and the interfaces people actually touch."
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group rounded-3xl border border-ink/8 ${isOn ? "bg-white/30" : "bg-white"} p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-25px_rgba(11,18,32,0.35)] sm:p-10`}
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink/40">
                  {String(index + 1).padStart(2, "0")} — {project.role}
                </span>
                <h2 className="mt-2 max-w-[28ch] font-sans text-[1.6rem] font-medium leading-tight tracking-[-0.01em] text-ink">
                  {project.title}
                </h2>
              </div>

              <div className="flex gap-2">
                {project.demoLink &&<a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-ink/15 px-5 font-sans text-[0.82rem] font-medium text-ink transition-transform hover:scale-[1.03]"
                >
                  Live Demo
                </a>}

                {project.sourceLink &&<a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 shrink-0 items-center rounded-full border border-ink/15 px-5 font-sans text-[0.82rem] font-medium text-ink transition-transform hover:scale-[1.03]"
                >
                  View on GitHub
                </a>}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-ink/10 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-[0.06em] text-ink/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <ul className="mt-7 space-y-3 border-t border-ink/8 pt-7">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/75">
                  <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-glass" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

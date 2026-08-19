import PageShell from "../components/PageShell";
import { education, experience } from "../data/resume";

export default function Resume() {
  return (
    <PageShell
      eyebrow="Resume"
      title="Experience & education."
      intro="The condensed version lives here — the full write-up is one tap away."
    >
      <a
        href="/resume.pdf"
        download
        className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-sans text-[0.85rem] font-medium text-white transition-transform hover:scale-[1.03]"
      >
        Download resume (PDF)
      </a>

      <div className="mt-14">
        <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/50">
          Experience
        </h2>
        <div className="mt-6 space-y-10">
          {experience.map((role) => (
            <div
              key={role.company}
              className="grid grid-cols-1 gap-4 border-t border-ink/8 pt-8 sm:grid-cols-[1fr_2.2fr]"
            >
              <div>
                <p className="font-sans text-[1.05rem] font-medium text-ink">
                  {role.title}
                </p>
                <p className="mt-1 text-[0.92rem] text-ink/60">{role.company}</p>
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink/40">
                  {role.period}
                </p>
              </div>
              <ul className="space-y-3">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/75"
                  >
                    <span
                      className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-glass"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-ink/8 pt-8">
        <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/50">
          Education
        </h2>
        <div className="mt-5">
          <p className="font-sans text-[1.05rem] font-medium text-ink">
            {education.degree}
          </p>
          <p className="mt-1 text-[0.92rem] text-ink/60">{education.school}</p>
        </div>
      </div>
    </PageShell>
  );
}

import PageShell from "../components/PageShell";
import { useToggleMode } from "../context/ModeToggle.tsx";
import { languages, myValues, profile, skills } from "../data/resume";

export default function About() {

    const {isOn} = useToggleMode();

  return (
    <PageShell eyebrow="About" title="The person behind the build.">
      <div className={`grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] ${isOn && "bg-[#EADDCA]"}`}>
        {/* Left column — summary + competencies */}
        <div>
          <p className="font-sans text-[1.15rem] leading-relaxed text-ink/80">
            {profile.summary}
          </p>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-glass" aria-hidden="true" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink/70">
              {profile.availability}
            </span>
          </div>

          <h2 className="mt-14 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/50">
            My Values
          </h2>
          <ul className="mt-5 space-y-4">
            {myValues.map((item) => (
              <li key={item} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/75">
                <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-14 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/50">
            Languages
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
            {languages.map((lang) => (
              <li key={lang.name} className="text-[0.95rem] text-ink/75">
                <span className="text-ink">{lang.name}</span>{" "}
                <span className="text-ink/45">— {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — technical skills */}
        <div>
          <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/50">
            Technical skills
          </h2>
          <div className="mt-6 space-y-8">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="font-sans text-[0.92rem] font-medium text-ink">
                  {group.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-ink/10 bg-white px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-ink/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}

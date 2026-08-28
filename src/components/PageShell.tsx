import type { CSSProperties, ReactNode } from "react";
import { useToggleMode } from "../context/ModeToggle";

export default function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {

  const {isOn} = useToggleMode();

  return (
    <div className="page relative min-h-dvh bg-mist">
      <div className={`tech-grid ${isOn && "bg-[#EADDCA]"}`} aria-hidden="true">
        <span className="rule rule-v" style={{ left: "8.3333%" }} />
        <span className="rule rule-v" style={{ left: "91.6667%" }} />
        <span
          className="halo"
          style={{ width: "40vh", height: "40vh", top: "-8vh", right: "-8vw" }}
        />
      </div>

      <main className={`page-main relative z-10 ${isOn && "bg-[#EADDCA]"}`}>
        <p
          className="enter-up font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink/50"
          style={{ "--enter-delay": "0.05s" } as CSSProperties}
        >
          {eyebrow}
        </p>
        <h1
          className="enter-up mt-3 max-w-[26ch] font-sans font-normal text-ink"
          style={
            {
              fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              "--enter-delay": "0.15s",
            } as CSSProperties
          }
        >
          {title}
        </h1>
        {intro && (
          <p
            className="enter-up mt-6 max-w-[42ch] font-sans text-[1.05rem] leading-relaxed text-ink/70"
            style={{ "--enter-delay": "0.25s" } as CSSProperties}
          >
            {intro}
          </p>
        )}

        <div
          className="enter-up mt-14"
          style={{ "--enter-delay": "0.35s" } as CSSProperties}
        >
          {children}
        </div>
      </main>
    </div>
  );
}

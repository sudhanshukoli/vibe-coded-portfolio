import { useEffect, useRef, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { useToggleMode } from "../context/ModeToggle.tsx";
import { EDGE, TOPMATE_URL } from "../lib/theme";

const DESKTOP_RADIUS = 235;
const MOBILE_RADIUS = 150;
const POSITION_LERP = 0.14;
const RADIUS_LERP = 0.12;

export default function GlassHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  // Pointer / reveal state — refs only, never React state.
  const raw = useRef({ x: -999, y: -999 });
  const smoothed = useRef({ x: -999, y: -999 });
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const isTouching = useRef(false);
  const frameId = useRef<number | null>(null);
  const reducedMotion = useRef(false);
  const { isOn } = useToggleMode();

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = media.matches;
    const handleMediaChange = (event: MediaQueryListEvent) => {
      reducedMotion.current = event.matches;
    };
    media.addEventListener("change", handleMediaChange);

    const setPoint = (x: number, y: number) => {
      raw.current.x = x;
      raw.current.y = y;
    };

    const handlePointerEnter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setPoint(event.clientX, event.clientY);
      targetRadius.current = DESKTOP_RADIUS;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      setPoint(event.clientX, event.clientY);
    };

    const handlePointerLeave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetRadius.current = 0;
    };

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      isTouching.current = true;
      setPoint(touch.clientX, touch.clientY);
      targetRadius.current = MOBILE_RADIUS;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isTouching.current) return;
      const touch = event.touches[0];
      if (!touch) return;
      setPoint(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      isTouching.current = false;
      targetRadius.current = 0;
    };

    hero.addEventListener("pointerenter", handlePointerEnter);
    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);
    hero.addEventListener("touchstart", handleTouchStart, { passive: true });
    hero.addEventListener("touchmove", handleTouchMove, { passive: true });
    hero.addEventListener("touchend", handleTouchEnd, { passive: true });
    hero.addEventListener("touchcancel", handleTouchEnd, { passive: true });

    const tick = () => {
      const posFactor = reducedMotion.current ? 1 : POSITION_LERP;
      const radiusFactor = reducedMotion.current ? 1 : RADIUS_LERP;

      smoothed.current.x += (raw.current.x - smoothed.current.x) * posFactor;
      smoothed.current.y += (raw.current.y - smoothed.current.y) * posFactor;
      currentRadius.current +=
        (targetRadius.current - currentRadius.current) * radiusFactor;

      hero.style.setProperty("--reveal-x", `${smoothed.current.x}px`);
      hero.style.setProperty("--reveal-y", `${smoothed.current.y}px`);
      hero.style.setProperty(
        "--reveal-radius",
        `${Math.max(currentRadius.current, 0)}px`
      );

      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);

    return () => {
      media.removeEventListener("change", handleMediaChange);
      hero.removeEventListener("pointerenter", handlePointerEnter);
      hero.removeEventListener("pointermove", handlePointerMove);
      hero.removeEventListener("pointerleave", handlePointerLeave);
      hero.removeEventListener("touchstart", handleTouchStart);
      hero.removeEventListener("touchmove", handleTouchMove);
      hero.removeEventListener("touchend", handleTouchEnd);
      hero.removeEventListener("touchcancel", handleTouchEnd);
      if (frameId.current !== null) cancelAnimationFrame(frameId.current);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero bg-[#EADDCA]" aria-label="Sudhanshu — introduction">
      <div
        className={`hero-layer base-layer ${isOn ? "bg-[url('/images/Spiderman_base_pic_mobile.png')]" : "bg-[url('/images/Base_image_mobile.png')]"} 
          ${isOn ? "md:bg-[url('/images/Spiderman_base_pic.png')]" : "md:bg-[url('/images/Base_image_desktop.png')]" }`}
        // style={{ backgroundImage: "url(/images/Base_image_desktop.png)" }}
        aria-hidden="true"
      />
      <div
        className={`hero-layer reveal-layer ${isOn ? "bg-[url('/images/Spiderman_reveal_pic_mobile.png')]" : "bg-[url('/images/Reveal_image_mobile.png')]" }
          ${isOn ? "md:bg-[url('/images/Spiderman_reveal_pic.png')]" : "md:bg-[url('/images/Reveal_image_desktop.png')]" }`}
        // style={{ backgroundImage: "url(/images/Reveal_image_desktop.png)" }}
        aria-hidden="true"
      />

      <div className="tech-grid" aria-hidden="true">
        <span className="rule rule-v" style={{ left: "8.3333%" }} />
        <span className="rule rule-v" style={{ left: "50%" }} />
        <span className="rule rule-v" style={{ left: "91.6667%" }} />
        <span
          className="rule rule-h"
          style={{ top: "calc(2.5rem + 3.5rem)" }}
        />
        <span
          className="halo"
          style={{
            width: "44vh",
            height: "44vh",
            top: "8vh",
            right: "6vw",
          }}
        />
      </div>

      <h1
        className="absolute z-20 m-0 font-sans font-normal text-ink hero-title"
        style={{
          top: "34%",
          left: EDGE,
          fontSize: "clamp(5.4rem, 6.2vw, 6.8rem)",
          lineHeight: 0.93,
          letterSpacing: "-0.085em",
        }}
      >
        <span
          className="enter-up block overflow-hidden"
          style={{ "--enter-delay": "0.35s" } as CSSProperties}
        >
          Think.
        </span>
        <span
          className="enter-up block overflow-hidden"
          style={{ "--enter-delay": "0.48s" } as CSSProperties}
        >
          Code.
        </span>
        <span
          className={`enter-up block overflow-hidden ${isOn && "text-red-700"}`}
          style={{ "--enter-delay": "0.61s" } as CSSProperties}
        >
          {isOn ? "Swing." : "Create."}
        </span>
      </h1>

      <section
        aria-label="Introduction"
        className="enter-up absolute z-20 max-w-[26rem]"
        style={
          {
            left: EDGE,
            bottom: "max(3.2rem, env(safe-area-inset-bottom))",
            "--enter-delay": "0.85s",
          } as CSSProperties
        }
      >
        <p className="font-sans text-white text-xs md:text-[1.05rem] leading-relaxed md:text-ink/80">
          Full Stack Developer passionate about building fast, scalable, and
           modern web applications. Turning ideas into real-world digital solutions.
        </p>
        <div className="mt-2 md:mt-6 flex flex-wrap items-center gap-2 md:gap-3">
          <Link
            to="/projects"
            className="inline-flex min-h-11 items-center border border-ink/15 rounded-full bg-white px-6 font-sans text-xs md:text-[0.85rem] font-medium text-ink shadow-[0_1px_2px_rgba(11,18,32,0.08)] transition-transform hover:scale-[1.03]"
          >
            Explore my work
          </Link>
          <a
            onClick={TOPMATE_URL}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer inline-flex min-h-11 items-center rounded-full bg-white border border-ink/15 px-6 font-sans text-xs md:text-[0.85rem] font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            Let&rsquo;s talk
          </a>
        </div>
      </section>

      <aside
        aria-label="Manifesto"
        className="enter-up absolute z-20 text-right hero-aside"
        style={
          {
            right: EDGE,
            top: "calc(max(2.5rem, env(safe-area-inset-top)) + 6.5rem)",
            "--enter-delay": "1s",
          } as CSSProperties
        }
      >
        <p className="font-mono text-[0.5rem] md:text-[0.7rem] uppercase leading-[1.7] tracking-[0.12em] text-white md:text-ink/55">
          Crafting digital
          <br />
          experiences
          <br />
          beyond boundaries
        </p>
      </aside>
    </section>
  );
}

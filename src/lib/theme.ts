export const TOPMATE_URL = () => {

        const text = "Hi, I visited your portfolio website and would like to connect.";

    const whatsappUrl =
    `https://wa.me/918668327650?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
    };

// Horizontal page margin — mirrors the hero's original max(5.6vw, 2rem).
export const EDGE = "var(--edge)";

// Vertical clearance below the fixed nav bar.
export const NAV_TOP = "max(1.35rem, env(safe-area-inset-top))";

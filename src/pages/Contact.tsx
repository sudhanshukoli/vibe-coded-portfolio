import PageShell from "../components/PageShell";
import { profile } from "../data/resume";
import { TOPMATE_URL } from "../lib/theme";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { label: "GitHub", value: profile.githubHandle, href: profile.github },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin },
];

export default function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's build something."
      intro="Open to full-time roles and focused freelance work. A message or a call both work."
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
        <div>
          <dl className="divide-y divide-ink/8 border-y border-ink/8">
            {CHANNELS.map((channel) => (
              <div
                key={channel.label}
                className="flex items-center justify-between gap-4 py-5"
              >
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink/45">
                  {channel.label}
                </dt>
                <dd>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex min-h-11 items-center font-sans text-[0.98rem] text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-glass" aria-hidden="true" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink/70">
              {profile.availability}
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-ink/8 bg-white p-8 sm:p-10">
          <div>
            <h2 className="font-sans text-[1.3rem] font-medium leading-snug text-ink">
              Prefer to just talk it through?
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
              Book a slot directly and skip the back-and-forth over email.
            </p>
          </div>
          <a
            onClick={TOPMATE_URL}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer mt-8 inline-flex min-h-11 w-fit items-center rounded-full bg-ink px-6 font-sans text-[0.85rem] font-medium text-white transition-transform hover:scale-[1.03]"
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-glass" />
            Schedule a call
          </a>
        </div>
      </div>
    </PageShell>
  );
}

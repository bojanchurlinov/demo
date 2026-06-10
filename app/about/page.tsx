import Link from "next/link";

export default function About() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,_#fee2e2,_transparent_30%),linear-gradient(135deg,_#f8fafc_0%,_#eff6ff_45%,_#ede9fe_100%)] px-6 py-10 font-sans dark:bg-[radial-gradient(circle_at_top_right,_rgba(244,63,94,0.24),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#111827_48%,_#1e1b4b_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.24),_transparent_30%)] dark:bg-[radial-gradient(circle_at_bottom_left,_rgba(96,165,250,0.18),_transparent_30%)]" />
      <main className="relative flex min-h-[min(720px,90vh)] w-full max-w-3xl flex-col justify-center gap-8 rounded-[2rem] border border-white/70 bg-white/85 px-10 py-20 shadow-2xl shadow-blue-200/50 backdrop-blur dark:border-white/10 dark:bg-slate-950/75 dark:shadow-black/40 sm:px-16">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
            About Us
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            We build thoughtful digital experiences.
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante venenatis dapibus posuere velit aliquet. Donec
            ullamcorper nulla non metus auctor fringilla, and Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et.
          </p>
          <p>
            Vestibulum id ligula porta felis euismod semper. Curabitur blandit
            tempus porttitor. Maecenas faucibus mollis interdum. Aenean lacinia
            bibendum nulla sed consectetur, and Etiam porta sem malesuada magna
            mollis euismod.
          </p>
        </div>

        <Link
          className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          href="/"
        >
          Back to homepage
        </Link>
      </main>
    </div>
  );
}

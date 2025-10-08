import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start">
      <div>
        <Image
          src="/bilal.jpeg"
          alt="Portrait of Bilal"
          height={400}
          width={400}
          className="rounded-full object-cover"
        />
      </div>
      <div className="mt-4 md:mt-0 space-y-4 text-gray-800 text-base md:text-lg leading-relaxed">
        <p>
          Hi! I’m <strong>Bilal</strong> — a student and developer who’s been
          exploring the world of code one framework at a time. I started my
          journey with PHP and Laravel, moved into JavaScript to add some
          front-end flavor, and even dabbled a bit in Python (yes, I know what
          classes are, and I’ve actually used them).
        </p>
        <p>
          Lately, I’ve been diving into <strong>Elixir</strong> — because who
          doesn’t love learning a language that thinks in processes while you’re
          still thinking about dinner?
        </p>
        <p>
          I enjoy building things that work (most of the time), breaking them by
          accident, and then fixing them with slightly better code.
        </p>
        <p>
          When I’m not debugging, I’m probably reading docs (may be sometime
          novels), learning something new (eg: electronics), or trying to
          convince my code to “just run this one time.”
        </p>
        <p>
          If you’d like to connect or see what I’m building, check out my
          projects or reach out. I’m always happy to talk tech — or share a
          story about how I fixed a bug that turned out not to be a bug at all.
        </p>
      </div>
    </div>
  );
}

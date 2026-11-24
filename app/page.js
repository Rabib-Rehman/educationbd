import Image from "next/image";

export default function Home() {
  return (
    <main className="coming-soon">
      <section
        className="coming-soon__content"
        aria-labelledby="coming-soon-title"
      >
        <div className="brand-mark">
          <Image
            src="/brand-logo.png"
            alt="Education Bangladesh logo"
            fill
            priority
            sizes="(max-width: 640px) 220px, 280px"
          />
        </div>

        <h1 id="coming-soon-title">
          Education Bangladesh
          <span>is Coming Soon</span>
        </h1>
      </section>
    </main>
  );
}

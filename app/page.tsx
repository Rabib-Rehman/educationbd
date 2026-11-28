import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_50%_42%,white_0,transparent_55%)] px-5 py-8">
      <section
        className="flex w-full max-w-3xl flex-col items-center text-center"
        aria-labelledby="coming-soon-title"
      >
        <div className="relative aspect-square w-56 overflow-hidden rounded-full border-[6px] border-white bg-periwinkle-500 shadow-raised sm:w-64 md:w-72 md:border-8">
          <Image
            src="/brand-logo.png"
            alt="Education Bangladesh logo"
            fill
            priority
            sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
            className="object-cover"
          />
        </div>

        <h1 id="coming-soon-title" className="mt-6 md:mt-8">
          Education Bangladesh
          <span className="mt-2 block text-[0.66em] font-semibold text-navy-700">
            is Coming Soon
          </span>
        </h1>
      </section>
    </main>
  );
}

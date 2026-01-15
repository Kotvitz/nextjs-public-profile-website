import Image from "next/image";
export default function Hero() {
  return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.webp"
            alt="Wały Chrobrego w Szczecinie"
            fill
            priority
            className="object-cover"
          />

          <div className="hero-tint absolute inset-0" />
        </div>
      <div className="container-page pt-16 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative z-10 pb-10 md:pb-14">
            <h1 className="hero-text text-4xl font-bold tracking-tight sm:text-5xl">
              Rafał Kubowicz
            </h1>

            <p className="hero-text mt-4 text-lg">
              Przewodniczący Nowej Nadziei w Szczecinie
            </p>
          </div>

          <div className="relative">
            <div className="h-105 w-full overflow-hidden rounded-lg bg-gray-200 md:h-130">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

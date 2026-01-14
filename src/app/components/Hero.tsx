export default function Hero() {
  return (
    <div className="container-page py-24 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Rafał Kubowicz
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Przewodniczący Nowej Nadziei w Szczecinie
          </p>
        </div>

        <div className="relative">
          <div className="aspect-3/4 w-full overflow-hidden rounded-lg bg-gray-200">
          </div>
        </div>
      </div>
    </div>
  );
}

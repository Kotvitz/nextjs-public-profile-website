export default function About() {
  return (
    <div className="section-muted">
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Kim jestem?
            </h2>

            <div className="mt-6 space-y-4 text-gray-700" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="md:justify-self-end">
            <div className="panel overflow-hidden rounded-xl shadow-sm">
              <div className="h-90 w-[320px] bg-gray-200 sm:h-105 sm:w-90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

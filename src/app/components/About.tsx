export default function About() {
  return (
    <div className="container-page">
      <div className="grid items-start gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Kim jestem?
          </h2>

          <div className="mt-6 space-y-4 text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="md:col-span-1">
          <div className="aspect-3/4 w-full rounded-lg bg-gray-200">
          </div>
        </div>
      </div>
    </div>
  );
}

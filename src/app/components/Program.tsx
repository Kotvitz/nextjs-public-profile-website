type ProgramItem = {
  title: string;
  description: string;
};

const PROGRAM_ITEMS: ProgramItem[] = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Dolor sit amet",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Consectetur adipiscing",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Sed do eiusmod",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Program() {
  return (
    <div className="container-page">
      <h2 className="text-3xl font-semibold tracking-tight">
        Lorem ipsum
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAM_ITEMS.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border bg-white p-6"
          >
            <h3 className="text-lg font-medium">
              {item.title}
            </h3>

            <p className="mt-3 text-sm text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

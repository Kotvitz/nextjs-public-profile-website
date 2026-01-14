"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type GalleryItem = {
  id: string;
  alt: string;
};

const PLACEHOLDER_ITEMS: GalleryItem[] = Array.from({ length: 10 }).map((_, i) => ({
  id: String(i + 1),
  alt: `Lorem ipsum ${i + 1}`,
}));

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Activities() {
  const items = useMemo(() => PLACEHOLDER_ITEMS, []);
  const [index, setIndex] = useState(0);

  const visibleDesktop = 3;
  const maxIndexDesktop = Math.max(0, items.length - visibleDesktop);

  const prev = useCallback(() => {
    setIndex((i) => clamp(i - 1, 0, maxIndexDesktop));
  }, [maxIndexDesktop]);

  const next = useCallback(() => {
    setIndex((i) => clamp(i + 1, 0, maxIndexDesktop));
  }, [maxIndexDesktop]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  const canPrev = index > 0;
  const canNext = index < maxIndexDesktop;

  return (
    <div className="container-page">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">Aktywność i działania</h2>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            disabled={!canPrev}
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-md border",
              "hover:bg-gray-50 cursor-pointer disabled:opacity-40",
            ].join(" ")}
            aria-label="Previous photos"
          >
            ‹
          </button>

          <div className="relative flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${index * (100 / 3)}%)`,
              }}
            >
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className={[
                    "shrink-0",
                    "w-full sm:w-1/2 lg:w-1/3",
                    "pr-4",
                  ].join(" ")}
                >
                  <div className="aspect-4/3 w-full overflow-hidden rounded-lg bg-gray-200">
                    <div className="flex h-full items-center justify-center text-sm text-gray-500">
                      Photo {i + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-white to-transparent" />
          </div>

          <button
            type="button"
            onClick={next}
            disabled={!canNext}
            className={[
              "inline-flex h-10 w-10 items-center justify-center rounded-md border",
              "hover:bg-gray-50 cursor-pointer disabled:opacity-40",
            ].join(" ")}
            aria-label="Next photos"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

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

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const lightboxOpen = lightboxIndex !== null;

  const visibleDesktop = 3;
  const maxIndexDesktop = Math.max(0, items.length - visibleDesktop);

  const prev = useCallback(() => {
    setIndex((i) => clamp(i - 1, 0, maxIndexDesktop));
  }, [maxIndexDesktop]);

  const next = useCallback(() => {
    setIndex((i) => clamp(i + 1, 0, maxIndexDesktop));
  }, [maxIndexDesktop]);

  const openLightbox = useCallback((i: number) => {
    setLightboxIndex(i);
    requestAnimationFrame(() => setLightboxVisible(true));
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxVisible(false);
    window.setTimeout(() => setLightboxIndex(null), 200);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        return;
      }

      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, closeLightbox, prev, next]);

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
              style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
            >
              {items.map((item, i) => (
                <div key={item.id} className="shrink-0 w-full sm:w-1/2 lg:w-1/3 pr-4">
                  <button
                    type="button"
                    onClick={() => openLightbox(i)}
                    className="group relative aspect-4/3 w-full overflow-hidden rounded-lg bg-gray-200 cursor-zoom-in hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
                    aria-label={`Open photo ${i + 1}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-500">
                      Photo {i + 1}
                    </div>

                    <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10 bg-black" />
                  </button>
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

      {lightboxOpen && lightboxIndex !== null && (
        <div
          className={[
            "fixed inset-0 z-100",
            "transition-opacity duration-200 ease-out",
            lightboxVisible ? "opacity-100" : "opacity-0",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
        >
          <div className="absolute inset-0 bg-black/70" />

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-110 inline-flex h-11 w-11 items-center justify-center rounded-md text-white hover:bg-white/10"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 z-105 cursor-zoom-out"
            aria-label="Close preview"
          />

          <div className="relative z-106 mx-auto flex h-full max-w-5xl items-center justify-center p-4">
            <div
              className={[
                "w-full",
                "transform transition-transform duration-200 ease-out",
                lightboxVisible ? "scale-100" : "scale-95",
              ].join(" ")}
            >
              <div className="overflow-hidden rounded-lg bg-gray-900">
                <div className="aspect-16/10 w-full bg-gray-800">
                  <div className="flex h-full items-center justify-center text-gray-300">
                    Large photo {lightboxIndex + 1}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

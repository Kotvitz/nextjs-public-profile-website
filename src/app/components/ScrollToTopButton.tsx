"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 300;

    const onScroll = () => {
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-6 right-6 z-90",
        "h-12 w-12 rounded-full border cursor-pointer bg-white text-gray-800 shadow-sm",
        "hover:bg-gray-50 hover:shadow focus:outline-none focus:ring-2 focus:ring-gray-900/10",
        "transition-all duration-200 ease-out",
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-2 scale-95 pointer-events-none",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

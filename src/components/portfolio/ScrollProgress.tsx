import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-primary transition-[width] duration-150"
        style={{ width: `${p}%`, boxShadow: "0 0 12px oklch(0.74 0.16 200 / 0.7)" }}
      />
    </div>
  );
}

import { useState, useRef, useEffect } from "react";

// Reusable accordion component — pass `title` and `children` as props
export default function Accordion({ title, children, collapsed }) {
  const [isOpen, setIsOpen] = useState(!collapsed);
  const contentRef = useRef(null);

  useEffect(() => {
    setIsOpen(!collapsed);
  }, [collapsed]);

  return (
    <div className="border-gray-200 mb-6">

      {/* Toggle button — replaces <summary>, more accessible with aria attributes */}
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="w-full text-left text-lg sm:text-2xl font-semibold pb-3 mb-3 cursor-pointer flex justify-between items-center border-b">
        {title}
        {/* Chevron rotates 180° when open */}
        <span className="transition-transform duration-600" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
      </button>

      {/* Animated wrapper — height transitions from 0 to scrollHeight */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-600 ease-in-out"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div>
          {children}
        </div>
      </div>

    </div>
  );
}
"use client";
import { useRef, useEffect, useState } from "react";

export default function SmoothAccordionContent({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div
      style={{
        maxHeight: height,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
      }}
    >
      <div ref={contentRef} className="pl-9 pt-1">
        {children}
      </div>
    </div>
  );
}

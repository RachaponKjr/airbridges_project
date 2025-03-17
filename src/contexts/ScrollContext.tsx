'use client';
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useRef, ReactNode, useMemo } from "react";

interface ScrollContextType {
  sectionRefs: Record<string, React.RefObject<HTMLElement | null>>;
  scrollToSection: (section: string) => void;
}

// สร้าง Context (ค่าเริ่มต้นเป็น null)
const ScrollContext = createContext<ScrollContextType | null>(null);

// สร้าง Provider
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  // เอา useRef ออกมาใช้ที่ระดับบนสุด
  const sectionRefs: Record<string, React.RefObject<HTMLElement | null>> = {
    solutions: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const scrollToSection = (section: string) => {
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

// สร้าง Hook ใช้งาน Context
export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("❌ useScroll ต้องใช้ภายใน ScrollProvider เท่านั้น!");
  }
  return context;
};

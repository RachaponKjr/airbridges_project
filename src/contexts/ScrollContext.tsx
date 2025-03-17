import { createContext, useContext, useRef, ReactNode } from "react";

interface ScrollContextType {
  sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>>; // เปลี่ยนเป็น HTMLDivElement
  scrollToSection: (section: string) => void;
}

// สร้าง Context (ค่าเริ่มต้นเป็น null)
const ScrollContext = createContext<ScrollContextType | null>(null);

// สร้าง Provider
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  // ใช้ HTMLDivElement สำหรับ ref ที่คาดว่าจะใช้กับ <div>
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    solutions: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
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

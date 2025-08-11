"use client"
import { createContext, useState, useContext, ReactNode } from "react";

// Import translations from JSON files (Example)
import en from "@/locals/en.json";
import hi from "@/locals/hi.json";
import fr from "@/locals/fr.json";

// Define available languages
const translations: Record<string, any> = { en, hi ,fr};

// Create Context
const LanguageContext = createContext<any>(null);

// Language Provider Component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");

  // Function to change language
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use the Language Context
export const useLanguage = () => useContext(LanguageContext);

"use client";
import { useRouter } from "next/router";
import en from "../locals/en.json";
import fr from "../locals/fr.json";
import hi from "../locals/hi.json";

const translations: any = { en, fr, hi };

export function useTranslation() {
  const router = useRouter();
  const locale = router.locale || "en";

  return (key: string) => translations[locale as keyof typeof translations][key] || key;
}
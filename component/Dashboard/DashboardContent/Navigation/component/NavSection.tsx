import { ChevronDown } from "lucide-react";

import NavItemForActiveNess from "./NavItemForActiveNess";
import SmoothAccordionContent from "../SmoothAccordionContent";

export default function NavSection({ section, index, isOpen, toggleSection, pathname }: any) {
  const sectionValue = `section-${index}`;
  const hasActiveLink = section.items.some((item: any) =>
    pathname.startsWith(item.href)
  );

  return (
    <div>
      <button
        onClick={() => toggleSection(sectionValue)}
        className={`w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors ${
          hasActiveLink ? "text-blue-600 font-semibold" : "text-black"
        }`}
      >
        <div className="flex items-center">
          <section.icon className="h-5 w-5 mr-2" />
          <span>{section.label}</span>
        </div>
        <ChevronDown className={`h-5 w-5 ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <SmoothAccordionContent isOpen={isOpen}>
        <div className="flex flex-col space-y-1">
          {section.items.map((item: any) => (
            <NavItemForActiveNess
              key={item.href}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={pathname === item.href}
            />
          ))}
        </div>
      </SmoothAccordionContent>
    </div>
  );
}

import Link from "next/link";

export default function NavItemForActiveNess({ href, icon: Icon, label, active }: any) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors ${
          active ? "bg-gray-100 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <Icon className="w-4 h-4 mr-2" />
        {label}
      </div>
    </Link>
  );
}

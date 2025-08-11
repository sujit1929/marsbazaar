
import { Search } from "lucide-react";

export default function MoibleSearchBox() {
  return (
    <div className="flex my-2 md:hidden">
      <input
        type="text"
        placeholder="Search Amazon.in"
        className="w-full px-4 py-3 rounded-l-lg bg-white placeholder:text-gray-800 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-[#febd69] hover:bg-[#f3a847] px-6 rounded-r-lg flex items-center justify-center"
      >
        <Search size={24} />
      </button>
    </div>
  );
}

import React from "react";
import { Search as SearchIcon } from "lucide-react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Search destinations, hotels, places...",
  className = "",
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`h-14 flex items-center bg-white/10 backdrop-blur-xl px-4 rounded-2xl md:rounded-full border border-white/20 text-sm w-xl shadow-lg ${className}`}
    >
      <SearchIcon className="w-4 h-4 text-white/70 shrink-0" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-full bg-transparent outline-none border-none px-3 text-white placeholder:text-white/60"
      />
    </form>
  );
};

export default Search;

import { useState } from "react";
import SearchIcon from "../../assets/search-icon.svg?react";
import { useNavigate } from "react-router-dom";

type SearchInputProps = {
  onSearch?: (query: string) => void;
  initialQuery?: string;
};

const SearchInput = ({ onSearch, initialQuery = "" }: SearchInputProps) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    if (onSearch) {
      onSearch(trimmed);
    } else {
      navigate(`/search/term/${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div className="flex justify-center items-center my-4 mx-5 sm:mx-20">
      <div className="relative w-full max-w-3xl">
        <input type="text" value={query} onChange={handleChange} onKeyDown={handleKeyDown}
          placeholder="Search for products..."
          className="w-full pl-14 pr-4 py-3 text-md sm:text-xl rounded-full bg-transparent shadow-md border border-accent1 text-dark placeholder-gray-400 transition-all duration-100 focus:outline-none focus:ring-1 focus:ring-accent1-hover" />
        <SearchIcon onClick={handleSearch}
          className="w-10 h-10 text-accent1 hover:text-accent1-hover transition-colors duration-100 absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchInput;

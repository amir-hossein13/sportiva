import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-liteBule-100 px-3 py-2 text-sm shadow-sm focus-within:border-blue-400"
      dir="rtl"
    >
      <input
        type="text"
        placeholder="جست‌وجو کنید..."
        className="w-full bg-transparent text-right text-gray-700 placeholder-gray-400 outline-none"
      />
      <FiSearch className="h-5 w-5 text-gray-400" />
    </div>
  );
}

export default SearchBar;

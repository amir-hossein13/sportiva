import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  return (
    <div
      className="bg-liteBule-100 flex w-full items-center justify-end gap-2 rounded-lg px-4 py-2 text-sm text-gray-500"
      dir="rtl"
    >
      <FiSearch className="h-5 w-5 transition-colors duration-300 hover:text-blue-600" />
      <span className="text-sm whitespace-nowrap font-farsi">جست‌جو کنید</span>

      <input
        type="text"
        className="w-full bg-transparent text-right text-blue-500 placeholder-blue-300 outline-none"
      />
    </div>
  );
}

export default SearchBar;

function Button({ children }) {
  return (
    <button
      className="font-farsi bg-blue-400 text-white font-bold py-2 px-6 rounded-lg text-center   text-sm"
      dir="rtl"
    >
      {children}
    </button>
  );
}

export default Button;

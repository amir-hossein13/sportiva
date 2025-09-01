import { ReactNode } from 'react';

type ButtonType = {
  children: ReactNode;
  className: string;
};
function Button({ children, className }: ButtonType) {
  return (
    <button
      className={`font-farsi rounded-lg bg-blue-400 px-6 py-2 text-center text-sm font-bold whitespace-nowrap text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

import { ReactNode } from 'react';

type ButtonType = {
  children: ReactNode;
};
function Button({ children }: ButtonType) {
  return (
    <button className="font-farsi rounded-lg bg-blue-400 px-6 py-2 text-center text-sm font-bold text-white whitespace-nowrap">
      {children}
    </button>
  );
}

export default Button;

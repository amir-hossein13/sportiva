import { Link } from 'react-router-dom';

function Button({ children }) {
  return (
    <Link
      className="font-farsi rounded-lg bg-blue-400 px-6 py-2 text-center text-sm font-bold text-white"
      to="/login"
    >
      {children}
    </Link>
  );
}

export default Button;

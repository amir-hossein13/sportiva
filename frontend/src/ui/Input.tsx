type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className = '', ...props }: InputProps) {
  return <input className={`w-full rounded-md bg-[#eef5ff] p-2 ${className}`} {...props} />;
}

export default Input;

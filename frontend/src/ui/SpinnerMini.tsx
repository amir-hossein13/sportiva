import { BiLoaderAlt } from 'react-icons/bi';

export default function SpinnerMini() {
  return (
    <div className="flex items-center justify-center">
      <BiLoaderAlt className="text-aqua h-16 w-16 animate-spin" />
    </div>
  );
}

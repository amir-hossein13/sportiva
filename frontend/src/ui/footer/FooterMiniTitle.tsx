import { ReactNode } from "react";
type Props={
    children:ReactNode
}
function FooterMiniTitle({ children }:Props) {
  return (
    <div className="mt-6 flex md:justify-start justify-center">
      <h3 className="text-1xl text-gray-200">{children}</h3>
    </div>
  );
}

export default FooterMiniTitle

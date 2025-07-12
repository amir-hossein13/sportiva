import { ReactNode } from "react";
type Props={
    children:ReactNode
}
function FooterMiniTitle({ children }:Props) {
  return <h3 className="text-2xl">{children}</h3>;
}

export default FooterMiniTitle

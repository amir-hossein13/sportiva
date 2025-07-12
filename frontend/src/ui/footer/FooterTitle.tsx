import { ReactNode } from "react";

type Props = {
  children: ReactNode
};
function FooterTitle({ children }: Props) {
  return <h2 className="text-4xl">{children}</h2>;
}

export default FooterTitle;

import { ReactNode } from "react";

type Title = {
    children:ReactNode
}
function Title({ children }:Title) {
  return <h2 className="text-4xl font-extrabold text-[#00295F]">{children}</h2>;
}

export default Title

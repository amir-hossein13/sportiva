import { ReactNode } from "react";

type Title = {
    children:ReactNode
}
function Title({ children }:Title) {
  return <h2 className="text-4xl sm:mb-6 text-[#00295F]">{children}</h2>;
}

export default Title

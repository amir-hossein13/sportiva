import { ReactNode } from 'react';

type NavItemProps = {
  children: ReactNode;
  icon: ReactNode;
};

function NavItem({ children, icon }: NavItemProps) {
  return (
    <div className="flex cursor-pointer items-center justify-between gap-2">
      <div className="text-liteBule-300">{icon}</div>
      <button className="text-darkbule font-bold">{children}</button>
    </div>
  );
}

export default NavItem;

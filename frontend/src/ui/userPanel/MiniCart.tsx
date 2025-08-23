import { ReactNode } from 'react';
type Cart = {
  title: string;
  count: number;
  icon: ReactNode;
};
function MiniCart({ title, count, icon }: Cart) {
  return (
    <div className="user-cart-container gap-5 bg-white">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-darkbule font-semibold">{title}</h3>

        <div className="flex flex-row items-center gap-2">
          <h3 className="text-darkbule text-2xl">{count}</h3>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default MiniCart;

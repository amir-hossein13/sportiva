import { HiOutlineShoppingCart, HiHeart } from 'react-icons/hi2';

function LikedProduct() {
  return (
    <div className="w-full rounded-lg border border-gray-200 p-4">
      <div className="relative">
        <span className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
          -13%
        </span>
        <button className="absolute top-2 right-2 text-red-500">
          <HiHeart className="h-5 w-5" />
        </button>
        <div className="flex h-40 items-center justify-center rounded bg-gray-100">
          <div className="text-sm text-gray-400">Image</div>
        </div>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-800">Gaming Laptop</h3>

      <p className="mt-1 text-sm text-gray-500">4.8 (124 reviews)</p>

      <div className="mt-2">
        <span className="text-aqua mr-2 text-xl font-bold">$1299.99</span>
        <span className="text-sm text-gray-400 line-through">$1499.99</span>
      </div>

      <button className="bg-darkbule mt-4 flex w-full items-center justify-center gap-2 rounded py-2 text-sm font-bold text-white transition-colors hover:bg-blue-800">
        <HiOutlineShoppingCart className="h-4 w-4" />
        Add to Basket
      </button>
    </div>
  );
}

export default LikedProduct;

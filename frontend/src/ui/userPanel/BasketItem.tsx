import { HiMiniMinus, HiMiniPlus, HiOutlineTrash } from 'react-icons/hi2';

function BasketItem() {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-between rounded-lg border border-gray-500 p-4">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded bg-gray-400">
          {/* <img src="" alt="" /> */}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-800">Wireless Headphones</h3>
          <p className="text-sm text-gray-500">Color: Black · Size: One Size</p>
          <p className="mt-1 text-lg font-semibold text-cyan-700">$129.99</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded border border-blue-200 text-blue-600">
            <HiMiniMinus className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-gray-700">1</span>
          <button className="flex h-8 w-8 items-center justify-center rounded border border-blue-200 text-blue-600">
            <HiMiniPlus className="h-4 w-4" />
          </button>
        </div>

        <button className="text-red-500 hover:text-red-700">
          <HiOutlineTrash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default BasketItem;

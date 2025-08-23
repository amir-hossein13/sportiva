import { useDeleteProduct } from '@/features/product/useDeleteProduct';
import { useState } from 'react';
import {
  HiMiniDocumentDuplicate,
  HiMiniEllipsisHorizontal,
  HiMiniPencilSquare,
  HiMiniTrash,
} from 'react-icons/hi2';
import ProductModal from './ProductModal';

export default function DropdownMenu({ product }) {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { deleteProduct } = useDeleteProduct();
  const handelDelete = () => {
    deleteProduct(product.id);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button onClick={() => setOpen(!open)} className="rounded p-2 hover:bg-gray-100">
        <HiMiniEllipsisHorizontal size={20} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 z-50 mt-2 w-32 rounded-xl bg-white shadow-md">
          <ul className="py-1 text-sm text-gray-700">
            <li
              onClick={() => setToggle(true)}
              className="flex cursor-pointer items-center px-4 py-2 text-lg text-gray-500 hover:bg-gray-100"
            >
              ویرایش
              <HiMiniPencilSquare />
            </li>
            <ProductModal
              // category={getCategory}
              isOpen={toggle}
              mode="edit"
              product={product}
              productId={product.id}
              onClose={() => setToggle(false)}
            />
            <li
              onClick={handelDelete}
              className="flex cursor-pointer items-center px-4 py-2 text-lg text-gray-500 hover:bg-gray-100"
            >
              حذف
              <HiMiniTrash />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

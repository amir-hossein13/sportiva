import { HiMiniPlus } from 'react-icons/hi2';
import ContorolBarAdmin from '@/ui/ContorolBarAdmin';
import ProductTable from '../ProductTable';
import { useState } from 'react';
import { useCategory } from '@/features/category/useCategory';
import SpinnerMini from '@/ui/SpinnerMini';
import ProductModal from '../ProductModal';

function ProductManage() {
  const [toggle, setToggle] = useState(false);
  const { isLoading: isCategory, categories } = useCategory();
  if (isCategory) return <SpinnerMini />;
  return (
    <div className="mt-3">
      <div className="admin-cart-container bg-white">
        <div className="flex justify-between">
          <h2 className="text-darkBule text-4xl">مدیریت کاربرها</h2>
          <button
            onClick={() => setToggle(true)}
            className="admin-button-cart-mini bg-aqua text-white hover:bg-[#005b6a]"
          >
            ایتم جدید
            <HiMiniPlus />
          </button>
          <ProductModal
            category={categories}
            isOpen={toggle}
            mode="add"
            onClose={() => setToggle(false)}  
          />
        </div>
        <ContorolBarAdmin />
        <div className="mt-10">
          <ProductTable />
        </div>
      </div>
    </div>
  );
}

export default ProductManage;

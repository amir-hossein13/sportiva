import { useCategory } from '@/features/category/useCategory';
import { useDeleteCategory } from '@/features/category/useDeleteCategory';
import SpinnerMini from '@/ui/SpinnerMini';
import { useState } from 'react';
import { HiMiniPlus } from 'react-icons/hi2';
import AddCategoryModal from '../AddCategoryModal';

function CategoryManage() {
  const [toggle, setToggle] = useState(false);
  const { isLoading, categories } = useCategory();
  const { isDeleting, deleteCategory } = useDeleteCategory();
  console.log(categories);
  if (isLoading) return <SpinnerMini />;
  return (
    <div className="mt-3 rounded-lg bg-white p-6" dir="rtl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">مدیریت دسته بندی</h1>
        </div>
        <button
          onClick={() => setToggle(true)}
          className="admin-button-cart-mini bg-aqua text-white hover:bg-[#005b6a]"
        >
          دسته بندی جدید
          <HiMiniPlus />
        </button>
        <AddCategoryModal isOpen={toggle} onClose={() => setToggle(false)} />
      </div>
      <div className="mb-6 flex items-center justify-between">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-1/3 rounded-md border border-gray-300 px-4 py-2"
        />
      </div>
      <table className="w-full overflow-hidden rounded-md bg-white shadow">
        <thead>
          <tr className="bg-gray-100 text-right text-sm text-gray-600">
            <th className="p-4">دسته بندی</th>
            <th className="p-4">categoryId</th>
            <th className="p-4">تاریخ ساخت</th>
            <th className="p-4">دستورات</th>
          </tr>
        </thead>
        <tbody>
          {//@ts-expect-error error for the text
          categories?.categories?.map((category) => (
            <tr key={category.id} className="border-b border-gray-300">
              <td className="flex items-center p-4">
                <div>
                  <p className="font-semibold">{category.name}</p>
                </div>
              </td>
              <td className="p-4">
                <span className="rounded bg-gray-200 px-2 py-1">{category.id}</span>
              </td>

              <td className="p-4">{category.created_at ? category.created_at : 'معلوم نیست'}</td>
              <td className="p-4">
                {' '}
                <button
                  disabled={isDeleting}
                  onClick={() => deleteCategory(category.id)}
                  className="cursor-pointer rounded-xl bg-red-500 px-4 py-2 text-white"
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryManage;

import { useCategory } from '@/features/category/useCategory';
import { useDeleteCategory } from '@/features/category/useDeleteCategory';
import SpinnerMini from '@/ui/SpinnerMini';
import { useState } from 'react';
import { HiMiniPlus } from 'react-icons/hi2';
import AddCategoryModal from '../AddCategoryModal';

const categoriese = [
  {
    id: 1,
    image: 'https://via.placeholder.com/50', // جای تصویر واقعی بگذارید
    name: 'Electronics',
    description: 'Electronic devices and gadgets',
    slug: '/electronics',
    parent: 'Root',
    products: 45,
    status: 'Active',
    featured: true,
    created: '2024-01-15',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/50',
    name: 'Computers',
    description: 'Laptops, desktops, and computer accessories',
    slug: '/computers',
    parent: 'Root',
    products: 28,
    status: 'Active',
    featured: true,
    created: '2024-01-20',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/50',
    name: 'Gaming Laptops',
    description: 'High-performance gaming laptops',
    slug: '/gaming-laptops',
    parent: 'Computers',
    products: 12,
    status: 'Active',
    featured: false,
    created: '2024-02-01',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/50',
    name: 'Audio',
    description: 'Headphones, speakers, and audio equipment',
    slug: '/audio',
    parent: 'Root',
    products: 32,
    status: 'Active',
    featured: true,
    created: '2024-01-25',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/50',
    name: 'Accessories',
    description: 'Various tech accessories and peripherals',
    slug: '/accessories',
    parent: 'Root',
    products: 18,
    status: 'Active',
    featured: false,
    created: '2024-02-05',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/50',
    name: 'Mobile Devices',
    description: 'Smartphones, tablets, and mobile accessories',
    slug: '/mobile-devices',
    parent: 'Root',
    products: 8,
    status: 'Inactive',
    featured: false,
    created: '2024-02-10',
  },
];

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
          {categories?.categories?.map((category) => (
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

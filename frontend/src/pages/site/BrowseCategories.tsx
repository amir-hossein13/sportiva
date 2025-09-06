import { useCategory } from '@/features/category/useCategory';
import SpinnerMini from '@/ui/SpinnerMini';
import { Link } from 'react-router-dom';

type Category = {
  id: number;
  name: string;
  desc?: string;
  count: number;
};

function BrowseCategories() {
  const { isLoading, categories } = useCategory();

  if (isLoading) return <SpinnerMini />;
  // @ts-expect-error err
  const categoryList: Category[] = categories?.categories ?? [];

  if (!categoryList.length) {
    return (
      <div className="container mx-auto pt-10 text-center">
        <h2 className="text-darkBule text-2xl font-bold">هیچ دسته‌بندی‌ای یافت نشد</h2>
        <p className="mt-2 text-gray-500">به زودی دسته‌بندی‌های بیشتری اضافه خواهند شد.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-darkBule mb-2 text-3xl font-bold">دسته‌بندی‌ها</h1>
          <p className="text-gray-500">
            دسته‌بندی‌های مختلف را مرور کنید و مورد دلخواهتان را انتخاب کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categoryList.map((cat) => (
            <div
              key={cat.id}
              className="bg-liteBule-100 rounded-lg p-6 shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-darkBule mb-3 text-xl font-semibold">{cat.name}</h2>

              <span className="bg-darkBule mb-3 inline-block rounded-full px-3 py-1 text-sm text-white">
                {cat.count} آیتم
              </span>

              {cat.desc && <p className="mb-4 line-clamp-2 text-gray-600">{cat.desc}</p>}

              <Link
                to={`/category/${cat.id}`}
                className="bg-darkBule hover:bg-darkBule/90 block w-full rounded-md px-6 py-2 text-center text-white transition"
              >
                مشاهده دسته‌بندی
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;

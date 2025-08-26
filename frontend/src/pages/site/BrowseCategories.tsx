import { useCategory } from '@/features/category/useCategory';
import SpinnerMini from '@/ui/SpinnerMini';
import { Link } from 'react-router-dom';

function BrowseCategories() {
  const { isLoading, categories } = useCategory();
  if (isLoading) return <SpinnerMini />;
  console.log(categories);

  return (
    <div className="container mx-auto pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h1 className="text-darkBule mb-5 text-3xl font-bold">دسته بندی ها</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories?.categories?.map((cat) => (
            <div key={cat.id} className="bg-liteBule-100 rounded-lg p-6 text-center">
              <h2 className="text-darkBule mb-5 text-xl font-semibold">{cat.name}</h2>
              <span className="bg-darkBule ml-2 rounded-full px-3 py-1 text-sm text-white">
                {cat.count} items
              </span>
              <p className="mt-2 text-gray-600">{cat.desc}</p>
              <Link to={`/category/${cat.id}`}>
                <button className="bg-darkBule mt-4 w-full cursor-pointer rounded-md px-6 py-2 text-white">
                  Explore Category
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseCategories;

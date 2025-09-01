import { useCategoryById } from '@/features/category/useCategory';
import { ProductData } from '@/types/Product';
import ProductItem from '@/ui/ProductItem';
import SpinnerMini from '@/ui/SpinnerMini';
import { useParams } from 'react-router-dom';
type CategoryProduct = {
  id: number;
  product_id: number;
  category_id: number;
  created_at: string;
  updated_at: string;
  product: ProductData;
};
function Category() {
  const params = useParams();
  const categoryId = Number(params.categoryId);
  const { isLoading, category } = useCategoryById(categoryId);
  if (isLoading) return <SpinnerMini />;
  console.log(category);
  return (
    <div>
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h1 className="text-darkBule mb-5 text-3xl font-bold">دسته بندی</h1>
            </div>
          </div>
          <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {category?.products?.length > 0 ? (
              category.products.map((item: CategoryProduct) => (
                <ProductItem products={item.product} key={item.product.id} />
              ))
            ) : (
              <p>هیچ محصولی وجود ندارد</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

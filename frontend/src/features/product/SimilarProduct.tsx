import { HiChevronDown } from "react-icons/hi2";
import ProductItem from "../../ui/ProductItem";
import Title from "../../ui/Title";
import { useProduct } from "./useProduct";
import SpinnerMini from "../../ui/SpinnerMini";

function SimilarProduct() {
    const { isLoading, products } = useProduct();
    if(isLoading) return <SpinnerMini/>
    return (

          <section className="container mx-auto flex flex-col items-center mt-7">
            <div className="mb-20 space-y-3 pt-10 text-center">
              <Title>محصولات مشابه</Title>
            </div>
            <div className="grid w-full grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-x-0">
              {/* {products?.map((product) => (
                <ProductItem products={product} key={product.id} />
              ))} */}
              {/* <ProductItem /> */}
            </div>
            <div className="my-12 flex items-center justify-center gap-2">
              <HiChevronDown className="text-xl" />
              <button className="rounded-lg bg-gray-200 px-4 py-2 hover:bg-gray-300">Show More</button>
            </div>
          </section>
    )
}

export default SimilarProduct

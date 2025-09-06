import ProductInfo from '../../features/product/ProductInfo';
// import SimilarProduct from '../../features/product/SimilarProduct';
import LatestPosts from '../../ui/latestPost/LatestPosts';

function ProductDetail() {
  return (
    <section className="container mx-auto mt-14 mb-15">
      <ProductInfo />
      {/* <SimilarProduct /> */}
      <LatestPosts />
      
    </section>
  );
}

export default ProductDetail;

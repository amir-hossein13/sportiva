import Banner from '../../ui/Banner';
import Brandes from '../../ui/brandes/Brandes';
import Categories from '../../ui/category/Categories';
import LandingProduct from '../../ui/LandingProduct';
import LatestPosts from '../../ui/latestPost/LatestPosts';
import SpecialDiscounts from '../../ui/SpecialDiscounts';

function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <SpecialDiscounts />
      <Categories />
      <LandingProduct/>
      <LatestPosts/>
      <Brandes/>
    </div>
  );
}

export default Home;

import HeroSlider from '@/ui/HeroSlider';
import Banner from '../../ui/Banner';
import Brandes from '../../ui/brandes/Brandes';
import LandingProduct from '../../ui/LandingProduct';
import LatestPosts from '../../ui/latestPost/LatestPosts';
import SpecialDiscounts from '../../ui/SpecialDiscounts';

function Home() {
  return (
    <div className="overflow-hidden">
      <div className=" sm:block lg:hidden">
        <Banner />
      </div>
      <div className="hidden lg:block">
        <HeroSlider />
      </div>
      <SpecialDiscounts />
      <LandingProduct />
      <LatestPosts />
      <Brandes />
    </div>
  );
}

export default Home;

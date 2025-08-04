import { HiOutlineHeart, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function AuthUserIcons() {
  return (
    <div className="flex flex-row gap-5">
      <Link to="/user/favorite">
        <HiOutlineHeart className="h-5 w-5" />
      </Link>
      <Link to="/user/basket">
        <HiOutlineShoppingBag className="h-5 w-5" />
      </Link>
      <Link to="/user">
        <HiOutlineUser className="h-5 w-5" />
      </Link>
    </div>
  );
}

export default AuthUserIcons;

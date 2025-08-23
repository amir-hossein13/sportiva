import MiniCart from '@/ui/userPanel/MiniCart';
import {
  HiOutlineBell,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from 'react-icons/hi2';
import MainContent from './MainContent';

function Dashboard() {
  return (
    <div className="mt-3">
      <div className="grid gap-5 md:grid-cols-8">
        <MiniCart
          title="تعداد کاربر"
          count={12}
          icon={<HiOutlineShoppingCart className="text-aqua h-5 w-5" />}
        />
        <MiniCart
          title="محصولات فعال"
          count={5}
          icon={<HiOutlineHeart className="text-aqua h-5 w-5" />}
        />
        <MiniCart
          title="جمع سود"
          count={2}
          icon={<HiOutlineBell className="text-aqua h-5 w-5" />}
        />
        <MiniCart
          title="تیکت ها"
          count={2}
          icon={<HiOutlineBell className="text-aqua h-5 w-5" />}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 grid-rows-10 gap-5 md:grid-cols-10">
        <MainContent />
      </div>
      <div className="admin-cart-container mt-5">
        <div className="w-full rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-2 text-2xl font-bold">System Status</h2>
          <p className="mb-4 text-gray-600">Current system health and performance</p>

          <div className="mb-4">
            <div className="mb-1 flex justify-between">
              <span className="text-gray-800">Server Load</span>
              <span className="font-medium text-teal-600">45%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-teal-600"></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="mb-1 flex justify-between">
              <span className="text-gray-800">Database Usage</span>
              <span className="font-medium text-teal-600">72%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-teal-600"></div>
            </div>
          </div>

          <div>
            <div className="mb-1 flex justify-between">
              <span className="text-gray-800">Storage Used</span>
              <span className="font-medium text-teal-600">38%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div className="h-2 rounded-full bg-teal-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

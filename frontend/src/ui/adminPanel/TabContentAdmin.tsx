import useTabStore from '@/store/TabStore';
import Dashboard from './tabs/Dashboard';
import UserMange from './tabs/UserMange';
import ProductManage from './tabs/ProductManage';
import CategoryManage from './tabs/CategoryManage';

function TabContentAdmin() {
  const { activeTab } = useTabStore();
  return (
    <div>
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'users' && <UserMange />}
      {activeTab === 'product' && <ProductManage />}
      {activeTab === 'category' && <CategoryManage/>}
    </div>
  );
}

export default TabContentAdmin;

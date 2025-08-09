import useTabStore from '@/store/TabStore';
import OverviewContent from './OverviewContent';
import UserBasket from './UserBasket';
import FavoriteContent from './FavoriteContent';

function TabContent() {
  const { activeTab } = useTabStore();
  return (
    <div>
      {activeTab === 'overview' && <OverviewContent />}
      {activeTab === 'basket' && <UserBasket/>}
      {activeTab === 'favorites' && <FavoriteContent  />}
      {activeTab === 'security' && <p>🔒 Security Content</p>}
    </div>
  );
}

export default TabContent;

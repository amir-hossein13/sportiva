import useTabStore from '@/store/TabStore';

const tabs = [
  { id: 'dashboard', label: 'داشبورد' },
  { id: 'users', label: 'کاربر ها' },
  { id: 'product', label: 'محصولات' },
  { id: 'category', label: 'دسته بندی ها' },
];

function TabListAdmin() {
  const { activeTab, setActiveTab } = useTabStore();
  return (
    <nav className="flex justify-between rounded-md bg-[#b4d4ff80]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`font-semiboldcursor-pointer pointer-events-auto w-full rounded px-4 py-2 font-semibold transition-all duration-200 ${
            activeTab === tab.id ? 'bg-blue-900 font-semibold text-white' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default TabListAdmin;

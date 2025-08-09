import useTabStore from '@/store/TabStore';

const tabs = [
  { id: 'overview', label: 'پیشخوان' },
  { id: 'basket', label: 'سبد خرید' },
  { id: 'favorites', label: 'علاقه مندی ها' },
  { id: 'security', label: 'امنیت' },
];

function TabList() {
  const { activeTab, setActiveTab } = useTabStore();
  return (
    <nav className="flex justify-between rounded-md bg-[#b4d4ff80]">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`pointer-events-auto w-full cursor-pointer rounded px-4 py-2 transition-all duration-200 ${
            activeTab === tab.id ? 'bg-blue-900 text-white' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export default TabList;

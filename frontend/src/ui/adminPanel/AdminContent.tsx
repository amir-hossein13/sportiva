import TabContentAdmin from './TabContentAdmin';
import TabListAdmin from './TabListAdmin';

function AdminContent() {
  return (
    <div>
      <div className="userPanel-container main-content-container mt-10 max-w-7xl">
        <div className="flex flex-col">
          <TabListAdmin />
          <TabContentAdmin/>
        </div>
        <div className="grid gap-5 md:grid-cols-[1fr_2fr]">{/* <SideBarUser /> */}</div>
      </div>
    </div>
  );
}

export default AdminContent;

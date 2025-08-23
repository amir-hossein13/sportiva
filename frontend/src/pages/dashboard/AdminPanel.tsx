import AdminContent from '@/ui/adminPanel/AdminContent';
import AdminNavBar from '@/ui/adminPanel/AdminNavBar';

function AdminPanel() {
  return (
    <div className="bg-liteBule-100 min-h-dvh">
      <AdminNavBar />
      <AdminContent />
    </div>
  );
}

export default AdminPanel;

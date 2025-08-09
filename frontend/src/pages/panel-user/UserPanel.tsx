import UserContent from '@/ui/userPanel/UserContent';
import UserPNavbar from '@/ui/userPanel/UserPNavbar';

function UserPanel() {
  return (
    <div className='bg-liteBule-100 min-h-dvh'>
      <UserPNavbar />
      <UserContent/>
    </div>
  );
}

export default UserPanel;

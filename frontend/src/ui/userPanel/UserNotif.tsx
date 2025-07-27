import { ReactNode } from 'react';

type Notif = {
  title: string;
  icon: ReactNode;
  count?: number;
};
function UserNotif({ title, icon, count }: Notif) {
  return (
    <div className="shadow-stone-500 flex items-center justify-between rounded-xl bg-white p-4 shadow-md">
      <div className="inline-flex flex-row items-center gap-2">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <span className="text-darkbule text-xl font-bold">{count}</span>
    </div>
  );
}

export default UserNotif;

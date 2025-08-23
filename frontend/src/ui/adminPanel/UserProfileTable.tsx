// const users = [
//   {
//     name: 'جان دو',
//     email: 'john@example.com',
//     role: { label: 'مشتری', color: 'bg-blue-100 text-blue-700' },
//     status: { label: 'فعال', icon: '✔', color: 'bg-green-100 text-green-700' },
//     orders: 12,
//     totalSpent: '۱٬۲۹۹٫۹۹ دلار',
//     joinDate: '۱۴۰۲/۱۰/۲۵',
//   },
//   {
//     name: 'جین اسمیت',
//     email: 'jane@example.com',
//     role: { label: 'پریمیوم', color: 'bg-blue-200 text-blue-800' },
//     status: { label: 'فعال', icon: '✔', color: 'bg-green-100 text-green-700' },
//     orders: 8,
//     totalSpent: '۸۹۹٫۵۰ دلار',
//     joinDate: '۱۴۰۲/۱۲/۰۱',
//   },
//   {
//     name: 'مایک جانسون',
//     email: 'mike@example.com',
//     role: { label: 'مشتری', color: 'bg-blue-100 text-blue-700' },
//     status: { label: 'غیرفعال', icon: '✖', color: 'bg-red-100 text-red-700' },
//     orders: 3,
//     totalSpent: '۲۹۹٫۹۹ دلار',
//     joinDate: '۱۴۰۲/۱۲/۲۰',
//   },
//   {
//     name: 'سارا ویلسون',
//     email: 'sarah@example.com',
//     role: { label: 'وی‌آی‌پی', color: 'bg-blue-300 text-blue-900' },
//     status: { label: 'فعال', icon: '✔', color: 'bg-green-100 text-green-700' },
//     orders: 25,
//     totalSpent: '۲٬۴۹۹٫۹۹ دلار',
//     joinDate: '۱۴۰۲/۰۹/۱۴',
//   },
// ];

import { useUserList } from '@/features/userPanel/user/useUserList';
import UserRow from './UserRow';
import SpinnerMini from '../SpinnerMini';

function UserProfileTable() {
  const { isLoading, users } = useUserList();
  console.log(users);
  if (isLoading) return <SpinnerMini />;
  return (
    <div dir="rtl" className="overflow-x-auto rounded-lg bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-xs text-gray-600 uppercase">
          <tr>
            <th className="px-6 py-3 text-right">کاربر</th>
            <th className="px-6 py-3 text-right">نقش</th>
            <th className="px-6 py-3 text-right">شماره</th>
            <th className="px-6 py-3 text-right">شماره ملی</th>
            <th className="px-6 py-3 text-right">اسم شرکت</th>
            <th className="px-6 py-3 text-right">عملیات</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users?.map((user) => (
            <UserRow user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserProfileTable;

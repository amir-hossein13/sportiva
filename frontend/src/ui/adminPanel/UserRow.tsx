import { useDeleteUser } from '@/features/userPanel/user/useDeleteUser';

function UserRow({ user }) {
  const { deleteUser, isDeleting } = useDeleteUser();
  return (
    <tr key={user.id}>
      <td className="flex items-center gap-3 px-6 py-4">
        <div className="h-8 w-8 rounded-full bg-gray-200" />
        <div>
          <div className="font-semibold text-gray-900">{user.username}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className={`rounded-full px-3 py-1 text-xs font-medium`}>{user.role}</span>
      </td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="px-6 py-4">{user.meli}</td>
      <td className="px-6 py-4">{user.company}</td>
      <td className="px-6 py-4">
        <button
          disabled={isDeleting}
          onClick={() => deleteUser(user.id)}
          className="cursor-pointer rounded-xl bg-red-500 px-4 py-2 text-white"
        >
          حذف
        </button>
      </td>
    </tr>
  );
}

export default UserRow;

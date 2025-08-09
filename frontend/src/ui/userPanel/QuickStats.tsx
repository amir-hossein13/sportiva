export default function QuickStats({
  title = 'وضعیت اکانت',
  profileCompletion = 85, // %
  accountLevel = 3,
  memberSince = 'Jan 2023',
}) {
  return (
    <div className="col-span-1 rounded-2xl bg-white p-6 shadow">
      {/* Header */}
      <h2 className="mb-4 text-xl font-semibold text-blue-900">{title}</h2>

      {/* Profile Completion */}
      <div className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-gray-600">تکمیل پروفایل</span>
          <span className="font-medium text-blue-900">{profileCompletion}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-blue-100">
          <div
            className="h-full bg-gradient-to-r from-blue-700 to-teal-500"
            style={{ width: `${profileCompletion}%` }}
          />
        </div>
      </div>

      {/* Account Level */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-gray-600">سطح کاربر </span>
        <span className="rounded-full border border-blue-300 px-3 py-1 text-sm font-medium text-blue-900">
          Level {accountLevel}
        </span>
      </div>

      {/* Member Since */}
      <div className="flex items-center justify-between">
        <span className="text-gray-600">تاریخ عضویت</span>
        <span className="font-medium text-blue-900">{memberSince}</span>
      </div>
    </div>
  );
}

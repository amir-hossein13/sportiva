import Input from './Input';

export default function UserEditModal({ isOpen, onClose }) {
  if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" dir="rtl">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Modal panel */}
      <div className="relative mx-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between border-b pb-2">
          <h3 className="text-lg font-semibold">به‌روزرسانی اطلاعات کاربر</h3>
          <button onClick={onClose} className="rounded p-2 hover:bg-gray-100" aria-label="بستن">
            ✕
          </button>
        </div>

        <form className="grid gap-4">
          <Input type="text" placeholder="نام جدید" />
          <Input type="text" placeholder="ادرس" />

          <Input type="file" />

          <div className="flex justify-end gap-3 border-t pt-2">
            <button
              type="button"
              onClick={onClose}
              className="border-liteBule-300 rounded-lg border px-4 py-2 hover:bg-gray-50"
            >
              انصراف
            </button>
            <button
              type="button"
              className="bg-aqua rounded-lg px-4 py-2 text-white hover:bg-indigo-700"
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

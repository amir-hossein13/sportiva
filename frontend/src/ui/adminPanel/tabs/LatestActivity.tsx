function LatestActivity() {
  return (
    <div className="rounded-lg bg-blue-100 p-4">
      <ul className="space-y-2">
        <li className="flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-blue-800">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          ثبت نام کاربر جدید sarah@example.com · ۲ دقیقه پیش
        </li>
        <li className="flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-blue-800">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          محصول جدید اضافه شد: لپ‌تاپ XYZ · ۱۵ دقیقه پیش
        </li>
        <li className="flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-blue-800">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          تیکت پشتیبانی پاسخ داده شد توسط admin · ۳۰ دقیقه پیش
        </li>
        <li className="flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-blue-800">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          سفارش جدید ثبت شد: #12345 · ۱ ساعت پیش
        </li>
        <li className="flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-blue-800">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          به‌روزرسانی سیستم: نسخه ۲.۱ · ۲ ساعت پیش
        </li>
      </ul>
    </div>
  );
}

export default LatestActivity;

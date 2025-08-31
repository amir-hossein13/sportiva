import { useForm } from 'react-hook-form';
import Input from '../Input';
import { useCreateProduct } from '@/features/product/useCreateProduct';
interface IFormInput {
  name: string;
  price: number;
  discount: number;
  finaleprice: number;
  color: string;
  description: string;
  quantity: number;
  categories: number[];
  photo: FileList;
}
function AddUserModal({ isOpen, onClose, category }) {
  const { isPending, addProduct } = useCreateProduct();
  const { register, handleSubmit, reset, watch, setValue } = useForm<IFormInput>();
  const price = watch('price');
  const discount = watch('discount');
  const finaleprice = price && discount ? price / discount : '';

  const onSubmit = (data: IFormInput) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', String(data.price ?? 0));
    formData.append('discount', String(data.discount ?? 0));
    formData.append('finaleprice', String(data.finaleprice ?? 0));
    formData.append('color', data.color || '');
    formData.append('description', data.description || '');
    formData.append('quantity', String(data.quantity ?? 0));
    (data.categories || []).forEach((cat) => {
      formData.append('categories[]', String(cat));
    });
    const file = (data.photo as FileList)[0];
    console.log('file object before append:', file);
    formData.append('photo', file);
    console.log('form data content;', formData);
    //@ts-expect-error error for the text

    addProduct(formData, {
      onSuccess: () => {
        reset();
        console.log('success', formData);
        // onClose()
      },
      onError: (err) => {
        console.log('error', err);
        console.log(formData);
      },
    });
  };

  if (!isOpen) return null;
  // console.log(category.categories);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" dir="rtl">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="relative mx-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between border-b pb-2">
          <h3 className="text-lg font-semibold">اضافه کردن کالای جدید</h3>
          <button onClick={onClose} className="rounded p-2 hover:bg-gray-100" aria-label="بستن">
            ✕
          </button>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('name', { required: true })} type="text" placeholder="نام کالا" />
          <Input {...register('price', { required: true })} type="number" placeholder="قیمت" />
          <Input {...register('discount', { required: true })} type="number" placeholder="تخفیف" />
          <Input
            type="number"
            value={finaleprice}
            readOnly
            placeholder="قیمت نهایی"
            {...register('finaleprice', { required: true })}
          />
          <Input {...register('color', { required: true })} type="text" placeholder="رنگ" />
          <Input
            {...register('description', { required: true })}
            type="text"
            placeholder="توضیحات"
          />
          <Input {...register('quantity', { required: true })} type="number" placeholder="تعداد" />
          {/* <Input type="text" placeholder="دسته بندی" /> */}
          <select
            {...register('categories', { required: true })}
            className="w-full rounded-md bg-[#eef5ff] p-2"
            multiple
            onChange={(e) => {
              const selectedValues = Array.from(e.target.selectedOptions).map((option) =>
                Number(option.value)
              );
              setValue('categories', selectedValues); // حالا categories آرایه‌ای از number است
            }}
          >
            <option value="" disabled hidden>
              انتخاب دسته بندی
            </option>
            {category?.categories?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <Input
            {...register('photo', {
              required: true,
            })}
            type="file"
          />
          {/* <Input type="text" placeholder="تعداد" /> */}

          <div className="flex justify-end gap-3 border-t pt-2">
            <button
              type="button"
              onClick={onClose}
              className="border-liteBule-300 rounded-lg border px-4 py-2 hover:bg-gray-50"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="bg-aqua rounded-lg px-4 py-2 text-white hover:bg-indigo-700"
              disabled={isPending}
            >
              ذخیره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserModal;

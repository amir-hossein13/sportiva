import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Input from '../Input';
import { useCreateProduct } from '@/features/product/useCreateProduct';
import { useUpdateProduct } from '@/features/product/useUpdateProduct'; // Assuming this exists

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

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: { categories: { id: number; name: string }[] };
  mode: 'add' | 'edit';
  product?: IFormInput;
  productId?: number;
}

function ProductModal({ isOpen, onClose, category, mode, product, productId }: ProductModalProps) {
  const { isPending: isAdding, addProduct } = useCreateProduct();
  const { isPending: isUpdating, updateProduct } = useUpdateProduct();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  const price = watch('price');
  const discount = watch('discount');
  const isPending = mode === 'add' ? isAdding : isUpdating;

  // Dynamically update finaleprice
  useEffect(() => {
    const calculated = price && discount ? price / discount : 0;
    setValue('finaleprice', calculated);
  }, [price, discount, setValue]);

  // Prefill form for edit mode
  useEffect(() => {
    if (mode === 'edit' && product) {
      setValue('name', product.name);
      setValue('price', product.price);
      setValue('discount', product.discount);
      setValue('finaleprice', product.finaleprice);
      setValue('color', product.color);
      setValue('description', product.description);
      setValue('quantity', product.quantity);
    }
  }, [mode, product, setValue]);

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
    const file = data.photo?.[0];
    if (file && mode === 'add') {
      console.log('file object before append:', file);
      formData.append('photo', file);
    }
    // Add productId for edit mode
    if (mode === 'edit' && productId) {
      formData.append('id', String(productId));
    }

    const mutate = mode === 'add' ? addProduct : updateProduct;
    mutate(formData, {
      onSuccess: () => {
        reset();
        console.log(`${mode} success`);
        onClose(); // Close modal on success
      },
      onError: (err) => {
        console.log('error message:', err);
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" dir="rtl">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="relative mx-4 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between border-b pb-2">
          <h3 className="text-lg font-semibold">
            {mode === 'add' ? 'اضافه کردن کالای جدید' : 'ویرایش کالا'}
          </h3>
          <button onClick={onClose} className="rounded p-2 hover:bg-gray-100" aria-label="بستن">
            ✕
          </button>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('name', { required: 'نام الزامی است' })}
            type="text"
            placeholder="نام کالا"
          />
          <Input
            {...register('price', { required: 'قیمت الزامی است' })}
            type="number"
            placeholder="قیمت"
          />
          <Input
            {...register('discount', { required: 'تخفیف الزامی است' })}
            type="number"
            placeholder="تخفیف"
          />
          <Input
            type="number"
            readOnly
            placeholder="قیمت نهایی"
            {...register('finaleprice', { required: 'قیمت نهایی الزامی است' })}
          />
          <Input
            {...register('color', { required: 'رنگ الزامی است' })}
            type="text"
            placeholder="رنگ"
          />
          <Input
            {...register('description', { required: 'توضیحات الزامی است' })}
            type="text"
            placeholder="توضیحات"
          />
          <Input
            {...register('quantity', { required: 'تعداد الزامی است' })}
            type="number"
            placeholder="تعداد"
          />
          {mode === 'edit' ? null : (
            <select
              {...register('categories', { required: 'دسته‌بندی الزامی است' })}
              className="w-full rounded-md bg-[#eef5ff] p-2"
              multiple
              onChange={(e) => {
                const selectedValues = Array.from(e.target.selectedOptions).map((option) =>
                  Number(option.value)
                );
                setValue('categories', selectedValues);
              }}
            >
              <option value="" disabled hidden>
                انتخاب دسته بندی
              </option>
              {category?.categories?.map((cat) => (
                <option
                  key={cat.id}
                  value={cat.id}
                  selected={product?.categories?.includes(cat.id)}
                >
                  {cat.name}
                </option>
              ))}
            </select>
          )}
          {errors.categories?.message && (
            <p className="text-red-500">{errors.categories.message}</p>
          )}

          <Input
            {...register('photo', { required: mode === 'add' ? 'عکس الزامی است' : false })} // Optional for edit
            type="file"
          />
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

export default ProductModal;

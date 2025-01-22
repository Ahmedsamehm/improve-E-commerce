import React, { memo } from "react";

const WishlistItem = ({
  product,
  handleRemove,
  AddToCart,
  CartLoading,
  LoadingDelete,
  isAddLoading,
}) => {
  return (
    <tr key={product?.id}>
      <td>
        <div className="flex items-center space-x-4">
          <img
            src={product?.imageCover}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <p className="font-bold text-[#E0E0E0]">{product.title}</p>
            <p className="text-[#B0B0B0]">{product.description}</p>
          </div>
        </div>
      </td>
      <td className="text-lg font-semibold text-[#E0E0E0]">
        ${product.price.toFixed(2)}
      </td>
      <td className="font-semibold px-10">
        <button
          onClick={async () => {
            await AddToCart(product.id); // إضافة العنصر إلى السلة
            handleRemove(product.id); // إزالة العنصر من قائمة الرغبات
          }}
          disabled={isAddLoading || CartLoading === product.id} // تعطيل الزر أثناء التحميل
          className={`btn btn-primary btn-sm bg-[#4A90E2] border-none hover:bg-[#357ABD] ${
            isAddLoading || CartLoading === product.id ? "opacity-50" : ""
          }`}
        >
          {isAddLoading || CartLoading === product.id ? ( // إذا كان الطلب جاريًا
            <span className="loading loading-spinner"></span> // عرض spinner
          ) : (
            "Add to Cart" // إذا لم يكن الطلب جاريًا، عرض النص العادي
          )}
        </button>
      </td>
      <td>
        <button
          onClick={() => handleRemove(product.id)}
          disabled={LoadingDelete === product.id} // تعطيل الزر أثناء التحميل
          className={`btn btn-error btn-sm bg-[#FF6B6B] border-none hover:bg-[#FF4C4C] ${
            LoadingDelete === product.id ? "opacity-50" : ""
          }`}
        >
          {LoadingDelete === product.id ? ( // إذا كان الطلب جاريًا
            <span className="loading loading-spinner"></span> // عرض spinner
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          )}
        </button>
      </td>
    </tr>
  );
};

export default memo(WishlistItem);

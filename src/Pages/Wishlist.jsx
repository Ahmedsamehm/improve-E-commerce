import React, { useContext, useCallback, memo, useState } from "react";
import Loading from "../Components/Loading";
import WishlistItem from "../Components/WishlistItem";
import WishlistCards from "../Components/WishlistCards";
import { WishlistContext } from "../Contexts/WishlistContext";
import { CartContext } from "../Contexts/CartContext";

const Wishlist = () => {
  const { wishlistItems, handleRemove, isLoading, LoadingDelete, CartLoading } =
    useContext(WishlistContext);

  const { AddToCart } = useContext(CartContext);

  // حالة isAddLoading لتتبع التحميل لكل عنصر
  const [isAddLoading, setIsAddLoading] = useState(null);

  const handleRemoveMemoized = useCallback(
    (id) => {
      handleRemove(id);
    },
    [handleRemove]
  );

  const AddToCartMemoized = useCallback(
    async (id) => {
      setIsAddLoading(id); // تعيين isAddLoading إلى id المنتج عند بدء الطلب
      try {
        await AddToCart(id); // إضافة العنصر إلى السلة
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        setIsAddLoading(null); // إعادة تعيين isAddLoading إلى null بعد انتهاء الطلب
      }
    },
    [AddToCart]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container-fluid mx-auto p-10 bg-[#1A1A1A] text-[#E0E0E0] min-h-screen content-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Your Favorite Items
      </h1>
      <p className="text-[#B0B0B0] mb-6 text-center">
        There are {wishlistItems?.length} Wishlist in this list
      </p>

      {/* Table for larger screens */}
      <div className="overflow-x-auto sm:block hidden">
        <table className="table-xs sm:table-sm md:table-md lg:table-lg w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>AddToCart</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlistItems.map((product) => (
              <WishlistItem
                key={product?.id}
                product={product}
                handleRemove={handleRemoveMemoized}
                AddToCart={AddToCartMemoized}
                CartLoading={CartLoading}
                LoadingDelete={LoadingDelete}
                isAddLoading={isAddLoading === product.id} // تمرير حالة التحميل لكل عنصر
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for smaller screens */}
      <WishlistCards
        wishlistItems={wishlistItems}
        handleRemove={handleRemoveMemoized}
        AddToCart={AddToCartMemoized}
        CartLoading={CartLoading}
        LoadingDelete={LoadingDelete}
        isAddLoading={isAddLoading}
      />
    </div>
  );
};

export default memo(Wishlist);

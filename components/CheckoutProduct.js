import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToCart(product));
  };

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p className="font-bold line-clamp-3">{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>${price}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              src="https://links.papareact.com/fdw"
              width="50px"
              height="60px"
              objectFit="contain"
              loading="lazy"
              alt="prime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToCart} className="button">
          Add to Cart
        </button>
        <button
          onClick={removeItemFromCart}
          className="button from-red-300 to-red-400 focus:ring-0 border-red-200 active:from-red-500"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

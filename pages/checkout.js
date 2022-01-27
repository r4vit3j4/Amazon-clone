import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/cartSlice";

function checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="lg:flex md:mt-10 max-w-5xl mx-auto">
        {/* Left */}
        <div className="flex-grow shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col m-3 p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length == 0
                ? "Your Amazon cart is empty"
                : "Shopping Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        <div
          className={`${
            items.length == 0 ? `hidden` : ``
          } flex flex-col bg-white p-10 shadow-md`}
        >
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length}) : &nbsp;
                <span className="font-bold">$ {total}</span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  `from-gray-300 to-gray-500 border-gray-200 cursor-not-allowed focus:ring-0 active:from-gray-300`
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;

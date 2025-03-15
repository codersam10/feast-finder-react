import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../utilis/cartSlice";
import { IMAGE_URL } from "../utilis/constants";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const removeAllItems = () => {
    dispatch(clearCart());
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const itemTotal = cartItems?.reduce((acc, item) => {
    return (
      acc +
      (item.price === undefined
        ? (item.defaultPrice / 100) * item.quantity
        : (item.price / 100) * item.quantity)
    );
  }, 0);
  const gst = itemTotal * 0.18;
  const toPay = itemTotal + 65 + 10 + gst;
  const total = {
    itemTotal,
    deliveryFee: 65,
    platformFee: 10,
    gst,
    toPay,
  };

  if (cartItems?.length === 0) {
    return (
      <div className="flex justify-center items-start py-20 px-5">
        <h2 className="text-4xl font-bold text-slate-500">
          Your cart is empty
        </h2>
      </div>
    );
  }

  return (
    <main className="grid grid-cols-1 gap-5 grid-rows-2 md:grid-rows-1 md:grid-cols-3 lg:gap-10 py-4 px-5 lg:px-10">
      <section className="md:col-span-2 py-4 bg-slate-200 rounded-xl">
        <button
          className="bg-slate-950 text-white block rounded-lg px-2 py-3 w-1/2 mx-auto"
          onClick={removeAllItems}
        >
          Remove All
        </button>
        <div className="cart-items flex flex-col gap-3 p-5">
          {cartItems?.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between gap-3 p-3 rounded-md w-full bg-white"
              >
                <div className="grow">
                  <h3 className="font-semibold line-clamp-3">{item.name}</h3>
                  <p>{`Rs. ${
                    item.price === undefined
                      ? item.defaultPrice / 100
                      : item.price / 100
                  }`}</p>
                </div>
                <div className="image-wrapper relative shrink-0 w-[9rem] h-[7rem] rounded-lg bg-white">
                  {item?.imageId && (
                    <img
                      className="object-cover object-top w-full h-full shrink-0 shadow-sm  rounded-lg overflow-hidden"
                      loading="lazy"
                      alt={item.name}
                      src={`${IMAGE_URL}w_208,h_208,c_fit/${item?.imageId}`}
                    />
                  )}
                  {
                    <div className="absolute left-1/2 -bottom-3 z-10 -translate-x-1/2 flex bg-slate-950 active:bg-slate-800 text-white font-bold rounded-lg">
                      <button
                        className="p-1 w-8"
                        onClick={() => {
                          handleDecrementQuantity(item.id);
                        }}
                      >
                        -
                      </button>
                      <span className="p-1 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="p-1 w-8"
                        onClick={() => {
                          handleIncrementQuantity(item.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="md:col-span-1 p-5 bg-slate-200 rounded-xl">
        <h1 className="text-2xl font-semibold mb-3">To Pay</h1>
        <div className="bg-white p-5 rounded-lg">
          <p className="flex justify-between">
            <span>Item Total</span>
            <span> Rs. {total.itemTotal}</span>
          </p>
          <p className="flex justify-between">
            <span>Delivery Fee</span>
            <span>Rs.{total.deliveryFee}</span>
          </p>
          <p className="flex justify-between">
            <span>Platform Fee</span>
            <span>Rs.{total.platformFee}</span>
          </p>
          <p className="flex justify-between">
            <span>GST 18%</span>
            <span>Rs.{total.gst.toFixed(2)}</span>
          </p>
          <p className="flex justify-between font-bold">
            <span>To pay</span>
            <span>Rs.{new Intl.NumberFormat("en-IN").format(total.toPay)}</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Cart;

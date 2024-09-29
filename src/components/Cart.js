import { useSelector } from "react-redux";
import { clearCart } from "../utilis/cartSlice";
import { IMAGE_URL } from "../utilis/constants";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const removeAllItems = () => {
    dispatch(clearCart());
  };
  console.log(cartItems?.length !== 0)
  return (
    <div className="flex flex-col gap-3 justify-center">
      <div>
        {cartItems?.length === 0 && (
          <div className="flex justify-center items-center h-screen text-4xl font-bold text-slate-500">
            <h2>Your cart is empty</h2>
          </div>
        )}
      </div>
      {cartItems?.length !== 0 && (
        <button
          className="bg-black text-white rounded-lg px-2 py-3 w-1/2 mx-auto"
          onClick={removeAllItems}
        >
          Remove All
        </button>
      )}

      {cartItems?.map((item) => {
        return (
          <div className="flex justify-between h-[7rem] w-1/2 mx-auto">
            <div>
              <h3>{item.name}</h3>
              <p>{`Rs. ${item.price / 100}`}</p>
            </div>
            <img
              className="object-cover object-top w-[10rem] h-full rounded-lg "
              loading="lazy"
              alt="menu food image"
              src={`${IMAGE_URL}w_208,h_208,c_fit/${item?.imageId}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

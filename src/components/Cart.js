import { useSelector } from "react-redux";
import { clearCart, removeItem } from "../utilis/cartSlice";
import { IMAGE_URL } from "../utilis/constants";
import { useDispatch } from "react-redux";
import deleteIcon from "../assets/delete.svg";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const removeAllItems = () => {
    dispatch(clearCart());
  };
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

      <div className="cart-items m-4 flex flex-col gap-3">
        {cartItems?.map((item, index) => {
          return (
            <div
              key={item.id}
              className="flex justify-between gap-3 p-3 bg-slate-200 rounded-md w-full mx-auto md:w-7/12"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>{`Rs. ${
                  item.price === undefined
                    ? item.defaultPrice / 100
                    : item.price / 100
                }`}</p>
              </div>
              <div className="image-wrapper relative shrink-0 w-[9rem] h-[7rem]">
                <img
                  className="object-cover object-top w-full h-full rounded-lg shrink-0 shadow-sm"
                  loading="lazy"
                  alt="menu food image"
                  src={`${IMAGE_URL}w_208,h_208,c_fit/${item?.imageId}`}
                />
                <button
                  className="absolute bottom-0 right-0 bg-slate-950 text-white rounded-tl-md rounded-br-md px-2 hover:bg-slate-700 active:bg-slate-800"
                  title="Remove Item"
                  onClick={() => dispatch(removeItem(index))}
                >
                  <img
                    src={deleteIcon}
                    alt="delete-icon"
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;

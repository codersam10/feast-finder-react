import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BottomNavBar = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40">
      <ul className="flex items-center justify-evenly bg-[hsla(0,0%,100%,0.9)] backdrop-blur-xl text-center md:hidden">
        <Link
          className="grow"
          to="/about"
        >
          <li className="hover:text-slate-600 py-3">About</li>
        </Link>
        <Link
          className="grow"
          to="/contact"
        >
          <li className="hover:text-slate-600 py-3">Contact</li>
        </Link>
        <Link
          className="grow"
          to="/grocery"
        >
          <li className="hover:text-slate-600 py-3">Grocery</li>
        </Link>
        <Link
          className="grow"
          to="/cart"
        >
          <li className="hover:text-slate-600 py-3">
            Cart({cartItems?.length})
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default BottomNavBar;

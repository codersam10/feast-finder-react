import MenuVariety from "./MenuVariety";
import { useState } from "react";
const MenuList = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  //show and hide menu feature
  const handleClick = () => {
    setShowMenu(!showMenu);
    //another way to write this logic -
    // showMenu === false ? setShowMenu(true) : setShowMenu(false);
  };
  return (
    <>
      <div
        className="menu-list-info text-2xl font-bold bg-slate-100 rounded-md p-2"
        onClick={handleClick}
      >
        {props?.data?.title} ({props?.data?.itemCards?.length})
      </div>

      <ul className="menu-variety">
        {props?.data?.itemCards?.map((itemCard) => {
          return (
            <li key={itemCard?.card?.info?.id}>
              {showMenu && (
                <MenuVariety
                  data={itemCard}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuList;

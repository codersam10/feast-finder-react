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
        className="menu-list-info text-2xl font-semibold flex justify-between"
        onClick={handleClick}
      >
        <span className=" p-2">
          {props?.data?.title} ({props?.data?.itemCards?.length})
        </span>
        <span className="cursor-pointer grid place-content-center text-gray-500 w-8 h-8">
          {showMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="currentColor"><path d="m280-400 200-200 200 200H280Z"/></svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100%"
              viewBox="0 -960 960 960"
              width="100%"
              fill="currentColor"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          )}
        </span>
      </div>

      <ul className="menu-variety flex flex-col gap-3 justify-center">
        {props?.data?.itemCards?.map((itemCard) => {
          return (
            showMenu && (
              <li
                className="menu-variety-info flex justify-between gap-5 rounded-md bg-slate-50 p-3"
                key={itemCard?.card?.info?.id}
              >
                <MenuVariety data={itemCard} />
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export default MenuList;

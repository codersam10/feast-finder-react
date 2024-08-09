import MenuVariety from "./MenuVariety";
import { useState } from "react";
const MenuList = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [expandIcon, setExpandIcon] = useState("expand_more");

  //show and hide menu feature
  const handleClick = () => {
    setShowMenu(!showMenu);
    //another way to write this logic -
    // showMenu === false ? setShowMenu(true) : setShowMenu(false);
    expandIcon === "expand_more"
    ? setExpandIcon("expand_less")
    : setExpandIcon("expand_more");

  };
  return (
    <>
      <div
        className="menu-list-info text-2xl font-semibold flex justify-between"
        onClick={handleClick}
      >
        <span className=" p-2">{props?.data?.title} ({props?.data?.itemCards?.length})</span>
        <span className="material-symbols-outlined cursor-pointer grid place-content-center">
          {expandIcon}
        </span>

      </div>

      <ul className="menu-variety flex flex-col gap-3 justify-center">
        {props?.data?.itemCards?.map((itemCard) => {
          return (
            showMenu && (
              <li className="menu-variety-info flex justify-between gap-5 rounded-md bg-slate-50 p-3" key={itemCard?.card?.info?.id}>
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

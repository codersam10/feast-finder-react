import { useState } from "react";
import MenuList from "./MenuList";

const MenuCategory = (props) => {
  // console.log(props.data);

  const [expandIcon, setExpandIcon] = useState("expand_more");
  return (
    <>
      <div className="menu-category-info flex justify-between">
        <span className="text-2xl font-bold">
          {props?.data?.title} ({props?.data?.categories?.length})
        </span>
        <span
          className="material-symbols-outlined cursor-pointer"
          onClick={() => {
            expandIcon === "expand_more"
              ? setExpandIcon("expand_less")
              : setExpandIcon("expand_more");
          }}
        >
          {expandIcon}
        </span>
      </div>

      <ul className="menu-list">
        {props?.data?.categories?.map((category) => {
          return (
            <li>
              <MenuList key={category?.title} data={category} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuCategory;

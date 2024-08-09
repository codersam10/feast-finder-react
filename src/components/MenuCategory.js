import MenuList from "./MenuList";

const MenuCategory = (props) => {
  return (
    <>
      <h1 className="menu-category-info flex justify-between text-3xl font-bold p-2">
        {props?.data?.title}
      </h1>

      <hr className="border-t-2 border-dashed border-gray-300 mx-2"/>

      <ul className="menu-list">
        {props?.data?.categories?.map((category) => {
          return (
            <li key={category?.title}>
              <MenuList data={category} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuCategory;

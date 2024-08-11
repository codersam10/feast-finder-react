import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`/restaurant-menu-list/${resId}`);
    const json = await data.json();
    setMenuInfo(json.data);
  };
  return menuInfo;
};

export default useRestaurantMenu;

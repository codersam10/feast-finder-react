import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(`/restaurant-menu-list/${resId}`);
      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }
      const json = await data.json();
      setMenuInfo(json.data);
    } catch (error) {}
  };
  return menuInfo;
};

export default useRestaurantMenu;

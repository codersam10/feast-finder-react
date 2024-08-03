import { useEffect, useState } from "react";
import { resMenuAPI } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resMenuAPI + resId);
    const json = await data.json();
    setMenuInfo(json.data);
  };
  return menuInfo;
};

export default useRestaurantMenu;

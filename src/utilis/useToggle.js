import React from "react";

const useToggle = (initialState = false) => {
  const [isActive, setIsActive] = React.useState(initialState);

  function toggle() {
    setIsActive((previousValue) => {
      return !previousValue;
    });
  }

  return [isActive, toggle];
};

export default useToggle;

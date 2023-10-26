import React, { useState } from "react";
function Counter() {
  const searchParams = new URLSearchParams(document.location.search);
  const [value, setValue] = useState(
    searchParams.get("counter") ? parseInt(searchParams.get("counter")) : 0
  );
  const handleIncrement = () => {
    setValue((pre) => {
      window.localStorage.setItem("counter", pre + 1);
      return pre + 1;
    });
  };
  return (
    <div className="counter">
      <span>{value}</span>
      <button onClick={handleIncrement}>Count</button>
    </div>
  );
}

export default Counter;

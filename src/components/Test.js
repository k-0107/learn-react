import React, { useState } from "react";

function Test() {
  const [data, setData] = useState(null);
  const handleButtonClick = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1");

      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="test">
      <h1>データ取得</h1>
      <button onClick={handleButtonClick}>クリック</button>
    </div>
  );
}

export default Test;

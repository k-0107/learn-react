import React, { useState } from "react";

function Test() {
  const [data, setData] = useState(null);
  const handleButtonClick = async () => {
    try {
      const response = await fetch("/api/v1");

      // レスポンスが成功した場合、JSONデータを取得
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } else {
        // レスポンスがエラーの場合はエラーメッセージをコンソールに表示
        console.error(
          "Error fetching data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="test">
      <h1>データ取得</h1>
      <button onClick={handleButtonClick}>クリック</button>
      {data && (
        <div>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Test;

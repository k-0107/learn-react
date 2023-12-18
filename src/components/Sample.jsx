import React, { useState } from "react";

function Sample() {
  const [formData, setFormData] = useState({ message: "Test!!!" });

  const handleSubmit = async (e) => {
    e.preventDefault(); // ここでデフォルトのイベントをキャンセル

    try {
      const response = await fetch("/messege ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("データを送信しました");
        console.log(formData);
        // 成功時の処理
      } else {
        console.error("データの送信に失敗しました");
        // エラー時の処理
      }
    } catch (error) {
      console.error("ネットワークエラー:", error);
      // ネットワークエラー時の処理
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">送信</button>
    </form>
  );
}

export default Sample;

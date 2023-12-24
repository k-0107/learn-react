import React, { useState, useEffect } from "react";

function Sample() {
  const [formData, setFormData] = useState({
    message: "Test!!!",
  });

  const [submittedMessages, setSubmittedMessages] = useState([]);

  useEffect(() => {
    // サーバーからメッセージ一覧を取得する処理
    fetch("/api/v1/message")
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 0) {
          setSubmittedMessages(data.data);
        } else {
          console.error("メッセージ一覧の取得に失敗しました");
          // エラー時の処理
        }
      })
      .catch((error) => {
        console.error("ネットワークエラー:", error);
        // ネットワークエラー時の処理
      });
  }, [submittedMessages]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ここでデフォルトのイベントをキャンセル

    try {
      const response = await fetch("/api/v1/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("データを送信しました");
        console.log(formData);

        setSubmittedMessages([...submittedMessages, formData.message]);

        setFormData({
          message: "",
        });
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
    <div>
      <form onSubmit={handleSubmit}>
        <label id="message">
          メッセージ:
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">送信</button>
      </form>
      <div>
        <h2>メッセージ一覧:</h2>
        <ul>
          {submittedMessages.map((item, index) => (
            <li key={index}>
              {item.message} - {item.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sample;

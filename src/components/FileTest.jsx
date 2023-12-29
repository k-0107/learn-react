import React, { useState } from "react";

function FileTest() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // ファイルをアップロードするための処理をここに追加
      console.log("Uploading file:", selectedFile);
      // ここでファイルをサーバーに送信するための処理を実行
    } else {
      console.log("ファイルが選択されていません。");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>アップロード</button>
    </div>
  );
}

export default FileTest;

import React, { useState } from "react";

function FileTest() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await fetch("/photo", {
          method: "POST",
          body: formData,
        });

        console.log("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      console.log("ファイルが選択されていません。");
    }
  };

  return (
    <div>
      <input type="file" name="image" onChange={handleFileChange} />
      <button onClick={handleUpload}>アップロード</button>
    </div>
  );
}

export default FileTest;

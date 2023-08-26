import axios from "axios";
import "./DropCard.css";
import { useSetRecoilState } from "recoil";
import { statusState } from "../../atoms/status";
import { imageURL } from "../../atoms/imageURL";
import { useRef } from "react";

const DropCard = () => {
  const setStatus = useSetRecoilState(statusState);
  const setImageUrl = useSetRecoilState(imageURL);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file) {
      return;
    }

    setStatus("UPLOADING");

    const formData = new FormData();
    formData.append("fileUpload", file);

    try {
      const response = await axios.post("/photos", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // TODO: check status code etc.
      setStatus("DONE");
      console.log(response.data.url);

      setImageUrl(response.data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDrop = async (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    if (ev.dataTransfer.files) {
      const file = ev.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (fileInputRef.current && fileInputRef.current.files) {
      handleFile(fileInputRef.current.files[0]);
    }
  };

  return (
    <>
      <header>
        <h1 className="title">
          PhotoPub
          {/* <br /> */}
        </h1>
        <p className="sub-title">... share with 🌍</p>
      </header>
      <h2>Upload your image</h2>
      <p>File should be jpeg, png ....</p>
      <div
        className="drop-area"
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}>
        <img src="image.svg" alt="" />
        <p>Drag & Drop your Image here</p>
      </div>
      <p id="second">Or</p>

      <button className="btn file-btn" onClick={() => handleClick()}>
        <label htmlFor="imageUpload">Choose a file</label>
        <input
          type="file"
          ref={fileInputRef}
          id="imageUpload"
          style={{ display: `none` }}
          onChange={() => handleClick()}
        />
      </button>
    </>
  );
};

export default DropCard;

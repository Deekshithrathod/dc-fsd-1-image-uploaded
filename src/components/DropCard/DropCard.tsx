import Card from "../Card/Card";
import "./DropCard.css";

const DropCard = () => {
  // const fileInputRef = useRef(null);
  // const [];
  const handleClick = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleDrop = (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    console.log(`reached handleDrop`);
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile() as File;
          console.log(`… file[${i}].name = ${file.name}`);
          console.log(file.type);
        }
      });
    } else {
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Card>
      <h1>Uploadinator</h1>
      <h2>Upload your image</h2>
      <p>File should be jpeg, png ....</p>
      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
        <img src="image.svg" alt="" />
        <p>Drag & Drop your Image here</p>
      </div>
      <p id="second">Or</p>

      <input
        id="fileInput"
        type="file"
        style={{ display: `none` }}
        accept="image/*"
      />
      <button className="btn" onClick={handleClick}>
        Choose a file
      </button>
    </Card>
  );
};

export default DropCard;

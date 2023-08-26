import { useRef, useState } from "react";
import "./SuccessCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Zoom } from "@mui/material";
import { useRecoilValue } from "recoil";
import { imageURL } from "../../atoms/imageURL";

const SuccessCard = () => {
  const [showCopied, setShowCopied] = useState(false);
  const imgURL = useRecoilValue(imageURL);
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowCopied(true);
    navigator.clipboard.writeText(imgURL);

    setTimeout(() => {
      setShowCopied(false);
    }, 300);
  };

  return (
    <div className="success" ref={containerRef}>
      <CheckCircleIcon sx={{ color: "green", fontSize: `3rem` }} />
      <h2>{`Uploaded successfully`}</h2>
      <div className="uploaded-img-container">
        <img src={imgURL} />
      </div>
      <div className="url-container">
        <p>{imgURL.slice(0, 50) + `...`}</p>
        <button className="btn" onClick={handleClick}>
          Copy Link
        </button>
      </div>
      <Zoom in={showCopied}>
        <div className="copied">
          Copied <CheckCircleIcon sx={{ fontSize: ".75rem", color: "green" }} />
        </div>
      </Zoom>
    </div>
  );
};

export default SuccessCard;

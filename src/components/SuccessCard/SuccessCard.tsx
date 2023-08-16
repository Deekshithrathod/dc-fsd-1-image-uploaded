import { useRef, useState } from "react";
import Card from "../Card/Card";
import "./SuccessCard.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Slide, Zoom } from "@mui/material";

const SuccessCard = () => {
  const [showCopied, setShowCopied] = useState(false);
  const [url, setURL] = useState(
    `https://exampleURL.com/your/upload/idyour/upload/idyour/upload/idyour/upload/id`
  );
  const containerRef = useRef(null);

  const handleClick = () => {
    setShowCopied(true);
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      console.log(`timeoutFadingout`);

      setShowCopied(false);
    }, 300);
  };

  return (
    <>
      <Card>
        <div className="success" ref={containerRef}>
          <CheckCircleIcon sx={{ color: "green", fontSize: `3rem` }} />
          <h2>Uploaded successfully</h2>
          <div className="uploaded-img-container">
            <img src="https://plus.unsplash.com/premium_photo-1664304102989-6048cbdc2051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
          </div>
          <div className="url-container">
            <p>{url.slice(0, 53) + `...`}</p>
            <button className="btn" onClick={handleClick}>
              Copy Link
            </button>
          </div>
          <Zoom in={showCopied}>
            <div className="copied">
              Copied{" "}
              <CheckCircleIcon sx={{ fontSize: ".75rem", color: "green" }} />
            </div>
          </Zoom>
        </div>
      </Card>
    </>
  );
};

export default SuccessCard;

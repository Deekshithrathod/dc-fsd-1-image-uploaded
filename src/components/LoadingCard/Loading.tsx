import Card from "../Card/Card";
import "./Loading.css";

const Loading = () => {
  return (
    <Card>
      <h2 style={{ textAlign: "left" }}>Uploading...</h2>
      <div className="loading-bar">
        <div className="inner-bar"></div>
      </div>
    </Card>
  );
};

export default Loading;

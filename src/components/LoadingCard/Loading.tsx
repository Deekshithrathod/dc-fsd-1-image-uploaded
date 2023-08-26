import "./Loading.css";

const Loading = () => {
  return (
    <>
      <h2 style={{ textAlign: "left" }}>Uploading...</h2>
      <div className="loading-bar">
        <div className="inner-bar"></div>
      </div>
    </>
  );
};

export default Loading;

import "./Card.css";

const Card = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return <div className="card">{children}</div>;
};

export default Card;

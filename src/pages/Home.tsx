import { useRecoilValue } from "recoil";
import { statusState, uploadStatus } from "../atoms/status";
import DropCard from "../components/DropCard/DropCard";
import Loading from "../components/LoadingCard/Loading";
import SuccessCard from "../components/SuccessCard/SuccessCard";
import "./Home.css";
import Card from "../components/Card/Card";

const Home = () => {
  const status = useRecoilValue(statusState);

  const getComponent = (val: uploadStatus) => {
    let retVal;
    switch (val) {
      case "DONE":
        retVal = <SuccessCard />;
        break;
      case "UPLOADING":
        retVal = <Loading />;
        break;
      default:
        retVal = <DropCard />;
        break;
    }
    return retVal;
  };
  return (
    <main>
      <Card>{getComponent(status)}</Card>
    </main>
  );
};

export default Home;

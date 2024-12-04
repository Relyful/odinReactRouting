import { Link, useParams } from "react-router-dom";
import Mobula7 from "./Mobula7";
import DefaultProfile from "./DefaultProfile";

const Fpv = () => {
  const { quad } = useParams();


  return (
    <>
      <h2>FPV PAGE</h2>
      <Link to="/">Go back</Link>
      {quad === "mobula7" ? (
        <Mobula7 />
      ) : (
        <DefaultProfile />
      )}
    </>
  )
};

export default Fpv;
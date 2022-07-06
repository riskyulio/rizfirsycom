import svg from "../../../public/favicon.svg";
import Image from "next/image";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <Image src={svg} alt="rizfirsy" />
      <span>Rizfirsy</span>
    </div>
  );
};

export default Logo;

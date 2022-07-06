import Image from "next/image";
import Link from "next/link";
import arrowSVG from "../../public/arrow-down-right.svg";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <section id="hero" className={classes.hero}>
        <div>
          <h4>Rizky Firman Syah</h4>
          <h1>
            <span className={classes.o}>O</span>
            <span className={classes.m}>M</span>
            <span className={classes.g}>G</span> Designer
            <br />& Frontend
            <br />
            Developer
          </h1>
        </div>
        <div className={classes.downArrow}>
          <Link href="#review">
            <Image src={arrowSVG} alt="arrow-icon" />
          </Link>
        </div>
      </section>
      <section id="about">About</section>
      <section id="whatIDo">What I do</section>
      <section id="whatIActuallyDo">What I do</section>
      <section id="review">review</section>
    </div>
  );
};

export default Home;

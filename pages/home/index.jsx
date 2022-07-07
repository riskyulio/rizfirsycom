import Image from "next/image";
import Link from "next/link";
import Card from "../../components/Cards/Card";
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
      <section id="about" className={classes.photo}>
        <div className={classes.photo}>
          <iframe
            src="https://giphy.com/embed/3o6Ztl7oraKm4ZJ9mw"
            className={classes["giphy-embed"]}
            frameBorder={0}
          ></iframe>
        </div>
        <div className={classes.biodata}>
          Hello my friends! my name is Rizky Firman Syah. <br /> I usually
          called as Kinos. My mom said that I was handsome and I prove it lol.
          <br /> If you don&apos;t believe me, it&apos;s mean you have a
          positive brain!
        </div>
      </section>
      <section id="whatIDo">What I do</section>
      <section id="whatIActuallyDo">What I do</section>
      <section id="review">review</section>
    </div>
  );
};

export default Home;

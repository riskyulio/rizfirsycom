import { useState } from "react";
import MainNavigation from "../../navigation/MainNavigation";
import CircleSketch from "../../p5/Sketch";
import Footer from "../../Footer/Footer";
import classes from "./PageLayout.module.css";

const PageLayout = (props) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const mouseMoveHandler = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <div onMouseMove={mouseMoveHandler} className={classes.container}>
      <div className={classes.p5}>
        <CircleSketch mouseX={mouseX} mouseY={mouseY} />
      </div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>

      <Footer />
    </div>
  );
};

export default PageLayout;

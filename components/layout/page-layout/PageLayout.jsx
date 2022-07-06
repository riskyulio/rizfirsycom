import MainNavigation from "../../navigation/MainNavigation";
import Footer from "../../Footer/Footer";
import classes from "./PageLayout.module.css";

const PageLayout = (props) => {
  return (
    <div className={classes.container}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;

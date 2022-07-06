import Link from "next/link";
import Logo from "../Assets/Logo/Logo";
import Button from "../Button/Button";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.mainNavigation}>
      <Logo />
      <ul className={classes.menu}>
        <li>
          <Button design="nav-menu">
            <Link href="/home">Home</Link>
          </Button>
        </li>
        <li>
          <Button design="nav-menu">
            <Link href="/about">About</Link>
          </Button>
        </li>
        <li>
          <Button design="nav-menu">
            <Link href="/insight">Insight</Link>
          </Button>
        </li>
      </ul>
      <Button design="primary">Get In Touch</Button>
    </header>
  );
};

export default MainNavigation;

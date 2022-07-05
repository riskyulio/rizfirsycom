import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${classes.button} ${classes.primary}`}>
      {props.text}
    </button>
  );
};

export default Button;

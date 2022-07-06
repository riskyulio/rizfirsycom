import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${classes[props.design]} ${
        classes.primary
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;

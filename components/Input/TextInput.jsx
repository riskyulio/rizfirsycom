import classes from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <div className={classes.textInputWrapper}>
      <input
        className={classes.textInput}
        placeholder={props.placeholder}
        type="text"
        minLength={3}
      />
    </div>
  );
};

export default TextInput;

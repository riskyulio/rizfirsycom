import classes from "./EmailInput.module.css";

const EmailInput = () => {
  return (
    <div className={classes.inputWrapper}>
      <input
        className={classes.input}
        placeholder="Email address"
        minLength={3}
        type="email"
      />
    </div>
  );
};

export default EmailInput;

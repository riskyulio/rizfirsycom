import classes from "./PasswordInput.module.css";

const EmailInput = () => {
  return (
    <div className={classes.passwordWrapper}>
      <input
        className={classes.password}
        placeholder="Password"
        type="password"
        minLength={3}
      />
    </div>
  );
};

export default EmailInput;

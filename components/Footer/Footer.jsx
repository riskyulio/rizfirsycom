import Form from "../Form/Form";
import Logo from "../Assets/Logo/Logo";
import TextArea from "../Input/TextArea";
import EmailInput from "../Input/EmailInput";
import TextInput from "../Input/TextInput";
import Button from "../Button/Button";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.about}>
        <Logo />
        <p>
          Freelance designer, frontend developer, playing Minecraft, and go to
          college on Thursday.
        </p>
      </div>

      <Form>
        <div className={classes.formDescription}>
          <h2>Contact me</h2>
          <p className={classes.ngeledek}>(if you can)</p>
        </div>
        <div className={classes.inputContainer}>
          <div className={classes.biodataInput}>
            <TextInput placeholder="Your Name" />
            <EmailInput />
          </div>
          <TextArea placeholder="hello rizky..." />
        </div>
        <Button>Send</Button>
      </Form>
    </footer>
  );
};

export default Footer;

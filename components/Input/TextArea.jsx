import classes from "./TextArea.module.css";

const TextArea = (props) => {
  return (
    <div className={classes.textAreaWrapper}>
      <textarea className={classes.textArea} placeholder={props.placeholder}>
        {props.children}
      </textarea>
    </div>
  );
};

export default TextArea;

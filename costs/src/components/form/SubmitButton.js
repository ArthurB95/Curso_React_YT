import styles from './SubmitButton.module.css';

function Input({ text }) {

  return (
    <div className={styles.wrapper}>
      <button className={styles.btn}>{text}</button>
    </div>
  )

}

export default Input;
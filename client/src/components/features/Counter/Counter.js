import styles from "./Counter.module.scss";

const Counter = ({ localLevel, localClick, setLocalLevel }) => {
  return (
    <div className={styles.counter}>
      <div>Score: {localClick}</div>
      <div>Level: {localLevel}</div>
    </div>
  );
};

export default Counter;

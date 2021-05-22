import styles from "./Counter.module.scss";

const Counter = ({ localLevel, localClick }) => {
  return (
    <section className={styles.counter}>
      <div>
        Score: <span className={styles.score}>{localClick}</span>
      </div>
      <div>
        Level: <span className={styles.score}>{localLevel}</span>
      </div>
    </section>
  );
};

export default Counter;

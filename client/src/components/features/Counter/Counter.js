import styles from "./Counter.module.scss";

const Counter = ({
  isLogged,
  localClick,
  localLevel,
  userClick,
  userLevel,
}) => {
  let click;
  let level;

  if (isLogged) {
    click = userClick;
    level = userLevel;
  } else {
    click = localClick;
    level = localLevel;
  }

  return (
    <section className={styles.counter}>
      <div>
        Score:
        <span className={styles.score}>{click}</span>
      </div>
      <div>
        Level:
        <span className={styles.score}>{level}</span>
      </div>
    </section>
  );
};

export default Counter;

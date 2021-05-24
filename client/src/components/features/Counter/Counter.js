import styles from "./Counter.module.scss";

const Counter = ({
  isLogged,
  currentUser,
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
      {currentUser && (
        <h4>
          Hello, <span className={styles.currUser}>{currentUser}</span>!
        </h4>
      )}
    </section>
  );
};

export default Counter;

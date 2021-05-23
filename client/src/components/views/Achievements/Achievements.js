import styles from "./Achievements.module.scss";

const Achievements = ({ localClick, achievements, isLogged, userClick }) => {
  let click;

  if (isLogged) {
    click = userClick;
  } else {
    click = localClick;
  }

  return (
    <div className={styles.achievements}>
      <h1 className={styles.title}>Yours achievements</h1>
      <ul className={styles.achWrapper}>
        {achievements.map((item, index) => (
          <li
            key={index}
            className={
              click >= item.clicks
                ? `${styles.achItem} ${styles.achieved}`
                : `${styles.achItem}`
            }
          >
            <p>Achievement {item.no}</p>
            <h3>
              {item.clicks}{" "}
              <span className={`${styles.iconClick} fas fa-mouse`}></span>
            </h3>
            <div className={styles.iconWrapper}>
              <i className={`fas fa-award ${styles.iconAward}`}></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;

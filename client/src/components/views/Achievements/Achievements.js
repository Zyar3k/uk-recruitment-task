import styles from "./Achievements.module.scss";

const Achievements = () => {
  const check = false;
  const data = [
    {
      no: 1,
      clicks: 100,
    },
    {
      no: 2,
      clicks: 200,
    },
    {
      no: 3,
      clicks: 300,
    },
    {
      no: 4,
      clicks: 400,
    },
    {
      no: 5,
      clicks: 500,
    },
    {
      no: 6,
      clicks: 600,
    },
    {
      no: 7,
      clicks: 700,
    },
    {
      no: 8,
      clicks: 800,
    },
    {
      no: 9,
      clicks: 900,
    },
    {
      no: 10,
      clicks: 1000,
    },
  ];
  return (
    <div className={styles.achievements}>
      <h1 className={styles.title}>Yours achievements</h1>
      <ul className={styles.achWrapper}>
        {data.map((item, index) => (
          <li
            key={index}
            className={
              check
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

import { useEffect, useState } from "react";

import styles from "./AchivInfo.module.scss";

const AchivInfo = ({ localClick, achievements }) => {
  const [achivLevel, setAchivLevel] = useState(0);
  const [achivState, setAchivState] = useState(0);
  const [show, setShow] = useState(false);
  let timeout = 10000;

  useEffect(() => {
    achievements.map((item) => {
      if (localClick === item.clicks) setShow(true);
      if (localClick === item.clicks) {
        console.log("level", item.clicks, item.no);
        setAchivLevel(item.no);
        setAchivState(item.clicks);
      }
      setTimeout(() => {
        setShow(false);
      }, timeout);
    });
  }, [localClick, achievements, timeout]);

  return (
    <section
      className={show ? `${styles.achivInfo} ${styles.show}` : styles.achivInfo}
    >
      <div className={styles.achivWrapper}>
        <h2 className={styles.title}>
          <span className={`fas fa-award ${styles.awardIcon}`}></span>New
          achievement!!
          <span className={`fas fa-award ${styles.awardIcon}`}></span>
        </h2>
        <div className={styles.achiv}>
          <p>You have achieved your {achivLevel} achievement !!</p>
          <h3>
            You <span className={`${styles.iconClick} fas fa-mouse`}></span>{" "}
            {achivState} times
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AchivInfo;

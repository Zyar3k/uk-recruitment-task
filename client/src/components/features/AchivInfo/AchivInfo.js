import { useEffect, useContext, useState } from "react";

import styles from "./AchivInfo.module.scss";

import { StoreContext } from "../../../store/StoreProvider";

const AchivInfo = () => {
  const { achievements, isLogged, localClick, userClick } =
    useContext(StoreContext);
  const [achivLevel, setAchivLevel] = useState(0);
  const [achivState, setAchivState] = useState(0);
  const [show, setShow] = useState(false);
  let timeout = 10000;

  let click;

  if (isLogged) {
    click = userClick;
  } else {
    click = localClick;
  }

  useEffect(() => {
    achievements.map((item) => {
      if (click === item.clicks) setShow(true);
      if (click === item.clicks) {
        setAchivLevel(item.no);
        setAchivState(item.clicks);
      }
      setTimeout(() => {
        setShow(false);
      }, timeout);
      return null;
    });
  }, [click, achievements, timeout]);

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

import { useContext } from "react";
import request from "../../../helpers/request";

import styles from "./Counter.module.scss";

import { StoreContext } from "../../../store/StoreProvider";

const Counter = () => {
  const {
    myStorage,
    isLogged,
    localClick,
    localLevel,
    currentUser,
    userClick,
    userLevel,
    setLocalClick,
    setLocalLevel,
    setUserClick,
    setUserLevel,
    userId,
  } = useContext(StoreContext);
  let click;
  let level;

  if (isLogged) {
    click = userClick;
    level = userLevel;
  } else {
    click = localClick;
    level = localLevel;
  }

  const handleClick = async () => {
    if (!currentUser) {
      setLocalClick(0);
      setLocalLevel(1);
      myStorage.setItem("localClick", localClick);
      myStorage.setItem("localLevel", localLevel);
    } else {
      const updateUser = {
        level: 1,
        clickCount: 0,
      };
      try {
        await request.patch(`/users/${userId}`, updateUser);
      } catch (err) {
        console.log(err);
      }
      setUserClick(0);
      setUserLevel(1);
      myStorage.setItem("userClick", userClick);
      myStorage.setItem("userLevel", userLevel);
    }
  };

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
      <div className={styles.resetWrapper}>
        Reset counter:
        <i
          onClick={() => handleClick()}
          className={`${styles.iconOff} fas fa-power-off`}
        ></i>
      </div>
    </section>
  );
};

export default Counter;

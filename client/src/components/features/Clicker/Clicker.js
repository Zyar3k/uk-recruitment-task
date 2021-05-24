import { useContext } from "react";

import chocoSplash from "../../../assets/chocolate-splash.png";
import styles from "./Clicker.module.scss";

import { StoreContext } from "../../../store/StoreProvider";

const Clicker = () => {
  const {
    myStorage,
    isLogged,
    localClick,
    setLocalClick,
    userClick,
    setUserClick,
  } = useContext(StoreContext);

  const handleClick = () => {
    let countLocal = JSON.parse(localClick);
    if (isLogged) {
      let countUser = JSON.parse(userClick);
      setUserClick(countUser);
      setUserClick((curr) => curr + 1);
      myStorage.setItem("userClick", userClick);
    } else {
      if (countLocal === null) setLocalClick(0);
      setLocalClick(countLocal);
      setLocalClick((curr) => curr + 1);
      myStorage.setItem("localClick", localClick);
    }
  };

  return (
    <section className={styles.clicker}>
      <img
        className={styles.splash}
        onClick={handleClick}
        src={chocoSplash}
        alt='chocolate-splash'
      />
    </section>
  );
};

export default Clicker;

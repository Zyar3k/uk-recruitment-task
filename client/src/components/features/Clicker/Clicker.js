import chocoSplash from "../../../assets/chocolate-splash.png";
import styles from "./Clicker.module.scss";

const Clicker = ({
  isLogged,
  myStorage,
  localClick,
  setLocalClick,
  userClick,
  setUserClick,
}) => {
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

import styles from "./Clicker.module.scss";

const Clicker = ({ localClick, setLocalClick, myStorage, isLogged }) => {
  const handleClick = () => {
    let countLocal = JSON.parse(localClick);
    if (isLogged) {
    } else {
      if (countLocal === null) setLocalClick(0);
      setLocalClick(countLocal);
      setLocalClick((curr) => curr + 1);
      myStorage.setItem("localClick", localClick);
    }
  };

  return (
    <div className={styles.clicker}>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Clicker;

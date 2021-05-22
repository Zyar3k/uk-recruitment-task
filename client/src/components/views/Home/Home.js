import Clicker from "../../features/Clicker/Clicker";
import Counter from "../../features/Counter/Counter";
import AchivInfo from "../../features/AchivInfo/AchivInfo";

import styles from "./Home.module.scss";

const Home = ({
  localClick,
  setLocalClick,
  myStorage,
  isLogged,
  localLevel,
  setLocalLevel,
  achievements,
}) => {
  return (
    <div className={styles.home}>
      <AchivInfo localClick={localClick} achievements={achievements} />
      <Clicker
        localClick={localClick}
        setLocalClick={setLocalClick}
        myStorage={myStorage}
        isLogged={isLogged}
      />
      <Counter localClick={localClick} localLevel={localLevel} />
    </div>
  );
};

export default Home;

import Clicker from "../../features/Clicker/Clicker";
import Counter from "../../features/Counter/Counter";

import styles from "./Home.module.scss";

const Home = ({
  localClick,
  setLocalClick,
  myStorage,
  isLogged,
  localLevel,
  setLocalLevel,
}) => {
  return (
    <div className={styles.home}>
      <Clicker
        localClick={localClick}
        setLocalClick={setLocalClick}
        myStorage={myStorage}
        isLogged={isLogged}
      />
      <Counter
        localClick={localClick}
        setLocalLevel={setLocalLevel}
        localLevel={localLevel}
      />
    </div>
  );
};

export default Home;

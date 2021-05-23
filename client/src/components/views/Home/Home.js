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
  achievements,
  userClick,
  setUserClick,
  userLevel,
}) => {
  return (
    <div className={styles.home}>
      <AchivInfo
        isLogged={isLogged}
        userClick={userClick}
        localClick={localClick}
        achievements={achievements}
      />
      <Clicker
        localClick={localClick}
        setLocalClick={setLocalClick}
        myStorage={myStorage}
        isLogged={isLogged}
        userClick={userClick}
        setUserClick={setUserClick}
      />
      <Counter
        isLogged={isLogged}
        localClick={localClick}
        localLevel={localLevel}
        userClick={userClick}
        userLevel={userLevel}
      />
    </div>
  );
};

export default Home;

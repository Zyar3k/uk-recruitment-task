import Clicker from "../../features/Clicker/Clicker";
import Counter from "../../features/Counter/Counter";
import AchivInfo from "../../features/AchivInfo/AchivInfo";

import styles from "./Home.module.scss";

const Home = ({
  localClick,
  setLocalClick,
  myStorage,
  isLogged,
  currentUser,
  localLevel,
  setLocalLevel,
  userClick,
  setUserClick,
  userLevel,
  setUserLevel,
  achievements,
  userId,
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
        myStorage={myStorage}
        isLogged={isLogged}
        localClick={localClick}
        setLocalClick={setLocalClick}
        userClick={userClick}
        setUserClick={setUserClick}
      />
      <Counter
        isLogged={isLogged}
        userId={userId}
        currentUser={currentUser}
        localClick={localClick}
        setLocalClick={setLocalClick}
        localLevel={localLevel}
        setLocalLevel={setLocalLevel}
        userClick={userClick}
        setUserClick={setUserClick}
        userLevel={userLevel}
        setUserLevel={setUserLevel}
        myStorage={myStorage}
      />
    </div>
  );
};

export default Home;

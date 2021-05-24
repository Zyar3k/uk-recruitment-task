import Clicker from "../../features/Clicker/Clicker";
import Counter from "../../features/Counter/Counter";
import AchivInfo from "../../features/AchivInfo/AchivInfo";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <AchivInfo />
      <Clicker />
      <Counter />
    </div>
  );
};

export default Home;

import { useContext } from "react";
import request from "../../../helpers/request";

import styles from "./Logout.module.scss";

import { StoreContext } from "../../../store/StoreProvider";

const Logout = () => {
  const {
    myStorage,
    setIsLogged,
    userId,
    setCurrentUser,
    userClick,
    setUserClick,
    userLevel,
    setUserLevel,
  } = useContext(StoreContext);

  const handleLogout = async (e) => {
    e.preventDefault();
    const updateUser = {
      level: userLevel,
      clickCount: userClick,
    };
    try {
      await request.patch(`/users/${userId}`, updateUser);
    } catch (err) {
      console.log(err);
    }
    setIsLogged(false);
    setCurrentUser(null);
    setUserClick();
    setUserLevel();
    myStorage.removeItem("user");
    myStorage.removeItem("userClick");
    myStorage.removeItem("userLevel");
  };

  return (
    <button onClick={handleLogout} className={styles.logout}>
      Logout
    </button>
  );
};

export default Logout;

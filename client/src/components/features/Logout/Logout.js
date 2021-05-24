import request from "../../../helpers/request";

import styles from "./Logout.module.scss";

const Logout = ({
  setIsLogged,
  setCurrentUser,
  myStorage,
  userId,
  userClick,
  setUserClick,
  userLevel,
  setUserLevel,
}) => {
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

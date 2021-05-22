import styles from "./Logout.module.scss";

const Logout = ({ setIsLogged, setCurrentUser, myStorage }) => {
  const handleLogout = () => {
    console.log("logout");
    setIsLogged(false);
    setCurrentUser(null);
    myStorage.removeItem("user");
  };
  return (
    <button onClick={handleLogout} className={styles.logout}>
      Logout
    </button>
  );
};

export default Logout;

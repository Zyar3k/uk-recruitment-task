import styles from "./Logout.module.scss";

const Logout = ({ setIsLogged, setCurrentUser, myStorage }) => {
  const handleLogout = () => {
    console.log("logout");
    setIsLogged(false);
    setCurrentUser(null);
    myStorage.removeItem("user");
  };
  return (
    <div className={styles.logout}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

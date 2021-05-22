import { NavLink } from "react-router-dom";

import Logout from "../../features/Logout/Logout";
import styles from "./Header.module.scss";

const Header = ({
  isLogged,
  setShowRegistry,
  setShowLogin,
  setIsLogged,
  setCurrentUser,
  myStorage,
}) => {
  return (
    <header className={styles.header}>
      <div className={`widthContainer ${styles.headerContent}`}>
        <NavLink className={`${styles.logo}`} exact to='/'>
          Splash Clicker
        </NavLink>
        <ul className={styles.navlinksWrapper}>
          <NavLink exact to='/' className={styles.navLink}>
            Home
          </NavLink>
          <NavLink exact to='/achievements' className={styles.navLink}>
            Achievements
          </NavLink>
          <NavLink exact to='/shop' className={styles.navLink}>
            Shop
          </NavLink>
        </ul>
        <div className={styles.userSection}>
          {isLogged ? (
            <Logout
              setIsLogged={setIsLogged}
              setCurrentUser={setCurrentUser}
              myStorage={myStorage}
            />
          ) : (
            <>
              <span onClick={() => setShowLogin(true)}>Login</span>
              <span onClick={() => setShowRegistry(true)}>SignUp!</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
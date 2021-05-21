import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = ({ isLogged }) => {
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
            <span>Logout</span>
          ) : (
            <>
              <span>Login</span>
              <span>SignUs!</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

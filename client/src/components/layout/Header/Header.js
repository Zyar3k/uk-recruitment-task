import { useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
import Logout from "../../features/Logout/Logout";
import styles from "./Header.module.scss";

const Header = ({
  isLogged,
  userId,
  setShowRegistry,
  setShowLogin,
  setIsLogged,
  setCurrentUser,
  myStorage,
  userClick,
  setUserClick,
  userLevel,
  setUserLevel,
}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className={styles.header}>
      <div className={`widthContainer ${styles.headerContent}`}>
        <NavLink
          onClick={closeMobileMenu}
          className={`${styles.logo}`}
          exact
          to='/'
        >
          Splash Clicker
        </NavLink>
        <ul
          className={
            click
              ? `${styles.navlinksWrapper} ${styles.active}`
              : styles.navlinksWrapper
          }
        >
          <NavLink
            onClick={closeMobileMenu}
            exact
            to='/'
            className={styles.navLink}
          >
            Home
          </NavLink>
          <NavLink
            onClick={closeMobileMenu}
            exact
            to='/achievements'
            className={styles.navLink}
          >
            Achievements
          </NavLink>
          <NavLink
            onClick={closeMobileMenu}
            exact
            to='/shop'
            className={styles.navLink}
          >
            Shop
          </NavLink>
        </ul>
        <div className={styles.userSection}>
          {isLogged ? (
            <Logout
              setIsLogged={setIsLogged}
              setCurrentUser={setCurrentUser}
              myStorage={myStorage}
              setUserClick={setUserClick}
              userClick={userClick}
              userLevel={userLevel}
              setUserLevel={setUserLevel}
              userId={userId}
            />
          ) : (
            <>
              <Button onClick={() => setShowLogin(true)}>Login</Button>
              <p
                className={styles.signUp}
                onClick={() => setShowRegistry(true)}
              >
                SignUp!
              </p>
            </>
          )}
        </div>
        <div className={styles.iconsWrapper}>
          <i
            onClick={handleClick}
            className={
              click
                ? `${styles.menuIcon} fas fa-times`
                : `${styles.menuIcon} fas fa-bars`
            }
          ></i>
        </div>
      </div>
    </header>
  );
};

export default Header;

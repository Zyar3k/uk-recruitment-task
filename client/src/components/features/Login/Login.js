import { useState, useRef, useEffect } from "react";

import request from "../../../helpers/request";

import logo from "../../../assets/chocolate-splash.png";
import styles from "./Login.module.scss";

const Login = ({
  setShowLogin,
  setCurrentUser,
  myStorage,
  setIsLogged,
  currentUser,
  userClick,
  setUserClick,
  setUserId,
  userLevel,
  setUserLevel,
}) => {
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username: usernameRef.current.value.toUpperCase(),
      password: passwordRef.current.value.toUpperCase(),
    };

    try {
      const res = await request.post("/users/login", user);
      const name = res.data.username;
      setCurrentUser(name);
      myStorage.setItem("user", name);
      setShowLogin(false);
      setIsLogged(true);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await request.get(`/users/${currentUser}`).then((res) => {
          setUserClick(res.data[0].clickCount);
          setUserLevel(res.data[0].level);
          setUserId(res.data[0]._id);
          myStorage.setItem("userClick", userClick);
          myStorage.setItem("userLevel", userLevel);
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (currentUser) {
      fetchUser();
    }
  }, [
    currentUser,
    myStorage,
    setUserClick,
    userClick,
    setUserId,
    setUserLevel,
    userLevel,
  ]);

  return (
    <div className={styles.login}>
      <p className={styles.logo}>
        <img src={logo} alt='chocolate-splash' />
        Splash Clicker
      </p>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder='nickname' ref={usernameRef} />
        <input
          type='password'
          min='6'
          placeholder='password'
          ref={passwordRef}
        />
        <button type='submit'>Login</button>
      </form>
      {error && <p className={styles.failure}>Something went wrong!</p>}
      <i
        className={`${styles.close} far fa-times-circle`}
        onClick={() => setShowLogin(false)}
      ></i>
    </div>
  );
};

export default Login;

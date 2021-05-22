import axios from "axios";

import { useState, useRef } from "react";

import logo from "../../../assets/chocolate-splash.png";
import styles from "./Login.module.scss";

const Login = ({ setShowLogin, setCurrentUser, myStorage, setIsLogged }) => {
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await axios.post("/users/login", user);
      setCurrentUser(res.data.username);
      console.log(res);
      myStorage.setItem("user", res.data.username);
      setShowLogin(false);
      setIsLogged(true);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

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
      {/* <button className={styles.close} onClick={() => setShowLogin(false)}>
        x
      </button> */}
      <i
        className={`${styles.close} far fa-times-circle`}
        onClick={() => setShowLogin(false)}
      ></i>
    </div>
  );
};

export default Login;

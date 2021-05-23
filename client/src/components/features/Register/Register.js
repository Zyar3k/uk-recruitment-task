import axios from "axios";

import { useState, useRef } from "react";

import logo from "../../../assets/chocolate-splash.png";
import styles from "./Register.module.scss";

const Register = ({ setShowRegistry }) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      if (
        newUser.username === "" ||
        newUser.email === "" ||
        newUser.password === ""
      ) {
        setError(true);
      } else {
        await axios.post("/users/register", newUser);
        setError(false);
        setSuccess(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.register}>
      <p className={styles.logo}>
        <img src={logo} alt='chocolate-splash' />
        Splash Clicker
      </p>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder='nickname' ref={usernameRef} />
        <input type='email' placeholder='email' ref={emailRef} />
        <input
          type='password'
          min='6'
          placeholder='password'
          ref={passwordRef}
        />
        <button type='submit'>Register</button>
      </form>
      {success && (
        <p className={styles.success}>Successfull. You can login now!</p>
      )}
      {error && <p className={styles.failure}>Something went wrong!</p>}
      <i
        className={`${styles.close} far fa-times-circle`}
        onClick={() => setShowRegistry(false)}
      ></i>
    </div>
  );
};

export default Register;

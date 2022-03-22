import { useState, useRef, useContext } from "react";

import { StoreContext } from "../../../store/StoreProvider";

import request from "../../../helpers/request";

import logo from "../../../assets/chocolate-splash.png";
import styles from "./Register.module.scss";

const Register = () => {
  const { setShowRegistry } = useContext(StoreContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [inccorectName, setInccorectName] = useState(false);
  const [inccorectMail, setInccorectMail] = useState(false);
  const [inccorectPassword, setInccorectPassword] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      username: usernameRef.current.value.toUpperCase(),
      email: emailRef.current.value.toUpperCase(),
      password: passwordRef.current.value.toUpperCase(),
    };

    try {
      let isCorrect = true;
      if (newUser.username.length < 3 || newUser.username === "") {
        setInccorectName(true);
        isCorrect = false;
      } else {
        setInccorectName(false);
        isCorrect = true;
      }
      if (newUser.email === "") {
        setInccorectMail(true);
        isCorrect = false;
      } else {
        setInccorectMail(false);
        isCorrect = true;
      }
      if (newUser.password.length < 6 || newUser.password === "") {
        setInccorectPassword(true);
        isCorrect = false;
      } else {
        setInccorectPassword(false);
        isCorrect = true;
      }
      if (isCorrect) {
        await request.post("/users/register", newUser);
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
        <img src={logo} alt="chocolate-splash" />
        Splash Clicker
      </p>
      <form onSubmit={handleSubmit}>
        <input autoFocus placeholder="nickname" ref={usernameRef} />
        {inccorectName && <span>At least 3 characters</span>}
        <input type="email" placeholder="email" ref={emailRef} />
        {inccorectMail && <span>Please enter a valid email</span>}
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        />
        {inccorectPassword && <span>At least 6 characters long</span>}
        <button type="submit">Register</button>
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

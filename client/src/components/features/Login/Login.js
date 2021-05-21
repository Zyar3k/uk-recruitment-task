import styles from "./Login.module.scss";

const Login = ({ setShowLogin }) => {
  return (
    <div className={styles.login}>
      <p>Login</p>
      <button onClick={() => setShowLogin(false)}>x</button>
    </div>
  );
};

export default Login;

import styles from "./Register.module.scss";

const Register = ({ setShowRegistry }) => {
  return (
    <div className={styles.register}>
      <p>Register</p>
      <button onClick={() => setShowRegistry(false)}>x</button>
    </div>
  );
};

export default Register;

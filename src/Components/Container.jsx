/* eslint-disable react/prop-types */
import styles from "./css/Container.module.css";
export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

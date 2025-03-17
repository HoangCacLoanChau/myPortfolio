import styles from "./css/Statis.module.css";
import CountUp from "react-countup";

export default function Statis() {
  return (
    <section className={styles.statis}>
      <div className={styles.statis_container}>
        <div className={styles.statis_item}>
          <p>
            <CountUp end={2} duration={2} className={styles.number}></CountUp>
          </p>
          <p>THANK</p>
        </div>
        <div className={styles.statis_item}>
          <p>0</p>
          <p>YOU</p>
        </div>
        <div className={styles.statis_item}>
          <p>
            <CountUp end={2} duration={2} className={styles.number}></CountUp>
          </p>
          <p>FOR</p>
        </div>
        <div className={styles.statis_item}>
          <p>
            <CountUp end={5} duration={3} className={styles.number}></CountUp>
          </p>
          <p>WATCHING</p>
        </div>
      </div>
    </section>
  );
}

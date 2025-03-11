/* eslint-disable react/no-unescaped-entities */
import Container from "./Container";
import styles from "./css/AboutMe.module.css";
export default function AboutMe() {
  return (
    <section id="aboutMe" className={styles.aboutMe}>
      <Container>
        <div className={styles.aboutMe_container}>
          <div className={styles.aboutMe_left}>
            <img src="./image/pic1.jpg" alt="" />
          </div>
          <div className={styles.aboutMe_right}>
            <div className="title">
              <h4>About me</h4>
              <h1>DISCOVERING MY PATH </h1>
            </div>
            <p className={styles.p}>
              Life is a journey, and I'm on an exciting adventure to grow, learn, and create! With a
              passion for technology and a curiosity for the world, I'm constantly exploring new
              possibilities.
            </p>
            <ul className={styles.ul}>
              <li>
                <i className="flaticon-check"></i>
                <span> 🎓 Proud graduate of **FPT University** </span>
              </li>
              <li>
                <i className="flaticon-check"></i>
                <span> 📖 Took on the TOEIC challenge and scored **880/990**! </span>
              </li>
              <li>
                <i className="flaticon-check"></i>
                <span> ✈️ Love to **travel** and soak in new experiences </span>
              </li>
              <li>
                <i className="flaticon-check"></i>
                <span>
                  {" "}
                  💻 Currently **learning React**—progressing step by step, but giving it my all! 😊{" "}
                </span>
              </li>
              <li>
                <i className="flaticon-check"></i>
                <span>
                  {" "}
                  🗣 Improving my **English speaking skills** to connect with the world 🌍{" "}
                </span>
              </li>
            </ul>
            <div>
              <button className="button_gradient">LEARN MORE</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

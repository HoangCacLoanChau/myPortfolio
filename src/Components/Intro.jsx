/* eslint-disable react/no-unescaped-entities */
import { MailFilled, ProfileFilled } from "@ant-design/icons";
import Container from "./Container";
import styles from "./css/Intro.module.css";
import "animate.css";
export default function Intro() {
  return (
    <section id="intro" className={styles.intro}>
      <Container>
        <div className={styles.intro_container}>
          <div className={styles.intro_left}>
            <div className="title">
              <h4 className="">Hi there,</h4>
              <h1 className="">
                My Name is Chau <br />
              </h1>
            </div>
            <p className="">
              I am still a newbie to web Developer and want to be a skilled one. I love turning
              ideas into reality using HTML, CSS, and JavaScript, and I'm currently learning ReactJS
              to build dynamic web applications.
            </p>
            <ul className="">
              <li>
                <i className="las la-check"></i>
                <span className="text-fuchsia-300 hover:text-fuchsia-800">
                  <MailFilled /> HoangCacLoanChau@gmail.com
                </span>
              </li>
              <li>
                <span className="text-fuchsia-300 hover:text-fuchsia-800">
                  <ProfileFilled /> my CV:
                </span>
              </li>
            </ul>
            {/* <div>
              <button className="button_gradient ">GET STARTED</button>
            </div> */}
          </div>
          <div className={styles.intro_right}>
            <div className={styles.banner}>
              <img src="/image/chau.png" alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

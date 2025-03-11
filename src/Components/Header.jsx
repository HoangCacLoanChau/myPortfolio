import Container from "./Container";
import styles from "./css/Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <Container>
        <nav className={styles.header_container}>
          <ul className={styles.nav}>
            <li className={styles.li}>
              <a className={styles.a} href="">
                <span className="inline-block">Home</span>
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#intro">
                <span className="inline-block">Intro</span>
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#skills">
                <span className="inline-block">Skills</span>
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#project">
                <span className="inline-block">Project</span>
              </a>
            </li>
            <li className={styles.li}>
              <a
                className="text-black font-medium transition delay-150 duration-300  hover:animate-pulse hover:text-rose-600"
                href="#aboutMe"
              >
                <span className="inline-block">About Me</span>
              </a>
            </li>
            <li className={styles.li}>
              <a
                className="text-black font-medium transition delay-150 duration-300  hover:animate-pulse hover:text-rose-600"
                href="#footer"
              >
                <span className="inline-block">Contact</span>
              </a>
            </li>
          </ul>
          <div>
            <a
              href="https://drive.google.com/file/d/1BSqKIoOCjYkoNjhT4aO8ag0Uqd2L6jkL/view?usp=sharing"
              target="_blank"
            >
              <button className="button_gradient">My Resume</button>
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
}

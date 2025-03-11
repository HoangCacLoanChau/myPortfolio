import Container from "./Container";
import styles from "./css/Header.module.css";
export default function Header() {
  return (
    <Container>
      <div className={styles.header}>
        <nav className={styles.header_container}>
          <ul className={styles.nav}>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                <span className="inline-block">Home</span>
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#intro">
                <span className="inline-block">About</span>
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                <span className="inline-block">Service</span>
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                <span className="inline-block">Post Layout</span>
              </a>
            </li>
            <li className={styles.li}>
              <a
                className="text-black font-medium transition delay-150 duration-300  hover:animate-pulse hover:text-rose-600"
                href="#"
              >
                <span className="inline-block">Blog</span>
              </a>
            </li>
            <li className={styles.li}>
              <a
                className="text-black font-medium transition delay-150 duration-300  hover:animate-pulse hover:text-rose-600"
                href="#footer"
              >
                <span className="inline-block">Contact Us</span>
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
      </div>
    </Container>
  );
}

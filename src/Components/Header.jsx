import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Container from "./Container";
import styles from "./css/Header.module.css";
export default function Header() {
  // const handleScrollToSection = (id) => {
  //   if (sectionRefs[id]?.current) {
  //     sectionRefs[id].current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.header_container}>
          <nav className={styles.nav}>
            {/* nav-bar  */}
            <input className={styles.input} type="checkbox" id="sidebar-active" />
            <label className={styles.menu_button} htmlFor="sidebar-active">
              <MenuOutlined className="text-2xl " />
            </label>
            {/* click outside of sidebar will exit it */}
            <label className={styles.overlay} htmlFor="sidebar-active"></label>
            <div className={styles.links_container}>
              <label className={styles.close_button} htmlFor="sidebar-active">
                <CloseOutlined className="text-2xl p-2" />
              </label>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <a className={styles.a} href="">
                    <span className="inline-block">Home</span>
                  </a>
                </li>
                <li className={styles.li}>
                  <a
                    className={styles.a}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   handleScrollToSection("introRef");
                    // }}
                  >
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
                <li>
                  <a
                    href="https://drive.google.com/file/d/1BSqKIoOCjYkoNjhT4aO8ag0Uqd2L6jkL/view?usp=sharing"
                    target="_blank"
                  >
                    <button className="button_gradient">My Resume</button>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
}

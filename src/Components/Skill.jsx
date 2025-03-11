import Container from "./Container";
import styles from "./css/Skill.module.css";
export default function Skill() {
  return (
    <section id="skills" className={styles.skills}>
      <Container>
        <div className="title">
          <h4>What I Know</h4>
          <h1>My skills</h1>
        </div>
        <div className={styles.skills_container}>
          <div className={styles.skills_item}>
            <img src="./image/pic1_3.jpg" alt="" />
            <h3>Front End</h3>
            <p>
              basic HTML, CSS, JS, TailwindCSS, React
              <br />
              🚀try my best in learning React!!!
            </p>
          </div>
          <div className={styles.skills_item}>
            <img src="./image/pic2_2.jpg" alt="" />
            <h3>Back End</h3>
            <p>I know basic query database, prisma ORM</p>
          </div>
          <div className={styles.skills_item}>
            <img src="./image/pic3_2.jpg" alt="" />
            <h3>Tools</h3>
            <p>Github</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

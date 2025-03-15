import Container from "./Container";
import styles from "./css/Project.module.css";
import {
  GithubOutlined,
  ApartmentOutlined,
  CodeOutlined,
  DeploymentUnitOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";
export default function Project() {
  return (
    <section id="project" className={styles.project}>
      <Container>
        <div className="title text-center">
          <h4>Some of my project</h4>
        </div>
        <div className={styles.project_container}>
          <div className={styles.project_left}>
            <div>
              <div className={styles.project_item}>
                <div className={styles.project_content}>
                  <i>
                    <ApartmentOutlined />
                  </i>
                  <div>
                    <h3>Alumni - graduation project - 4p</h3>
                    <p>
                      A multitenancy architecture application connecting schools and their alumni.
                      <br />
                      tech: NextJs, Prisma ORM, PostGreSQL, vercel, firebase
                      <br />
                      GitHub:{" "}
                      <a
                        className="hover:underline"
                        href="https://github.com/Capstone-Alumni/alumni"
                        target="_blank"
                      >
                        <GithubOutlined /> View on GitHub
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.project_item}>
                <div className={styles.project_content}>
                  <i>
                    <CodeOutlined />
                  </i>
                  <div>
                    <h3>Pooch Care - Project html and css</h3>
                    <p>
                      Live Demo:{" "}
                      <a
                        className="hover:underline"
                        href="https://pooch-care-xi.vercel.app/"
                        target="_blank"
                      >
                        <PlaySquareOutlined /> View Demo
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.project_item}>
                <div className={styles.project_content}>
                  <i>
                    <DeploymentUnitOutlined />
                  </i>
                  <div>
                    <h3>Fiver - Group project to learn React - 3p</h3>
                    <p>
                      Use Redux as state management, Axios to fecth data
                      <br />
                      UI: TailwindCSS, antd
                      <br />
                      GitHub:{" "}
                      <a
                        className="hover:underline"
                        href="https://github.com/HoangCacLoanChau/Fiver-Capstone"
                        target="_blank"
                      >
                        <GithubOutlined /> View on GitHub
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.project_right}>
            <img src="./image/pic3.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}

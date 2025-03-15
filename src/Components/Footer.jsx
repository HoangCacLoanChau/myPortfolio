import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import Container from "./Container";
import styles from "./css/Footer.module.css";
export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footer_copyright}>
        <Container>
          <div>
            <p >
              P/S: Thank you for watching until here. Although this website is not perfect, I will
              stay keen on improving it and making it more beautiful. 🙌
            </p>
          </div>
          <div className={styles.copyright_container}>
            <div className={styles.copy_left}>
              <span> Copyright © 2024 </span>
              <span>Hoang Cac Loan Chau</span>

              <span> . All rights reserved. </span>
            </div>

            <div className={styles.copy_right}>
              <a href="">
                <FacebookOutlined />
              </a>
              <a href="">
                <InstagramOutlined />
              </a>
              <a href="">
                <TwitterOutlined />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

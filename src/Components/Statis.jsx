import Container from "./Container";

export default function Statis() {
  return (
    <Container>
      <section className="statis">
        <div className="container">
          <div className="statis_container">
            <div className="statis_item">
              <i className="flaticon-smile"></i>
              <p>
                <span className="number">2</span>
              </p>
              <p>be a better developer</p>
            </div>
            <div className="statis_item">
              <i className="flaticon-line-chart"></i>
              <p>
                <span className="number">0</span>
              </p>
              <p>Regret</p>
            </div>
            <div className="statis_item">
              <i className="flaticon-startup"></i>
              <p>
                <span className="number">2</span>
              </p>
              <p>be a happy girl</p>
            </div>
            <div className="statis_item">
              <i className="flaticon-confetti"></i>
              <p>
                <span className="number">5</span>
              </p>
              <p>more in learning</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

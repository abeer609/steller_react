import Folio_1 from "./assets/imgs/folio-1.jpg";
import Folio_2 from "./assets/imgs/folio-2.jpg";

export default function Work() {
  return (
    <div className="col-sm-4">
      <div className="img-wrapper">
        <img src={Folio_1} alt="" />
        <div className="overlay">
          <div className="overlay-infos">
            <h5>Project Title</h5>
            <a href="#">
              <i className="ti-zoom-in"></i>
            </a>
            <a href="">
              <i className="ti-link"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={Folio_2} alt="" />
        <div className="overlay">
          <div className="overlay-infos">
            <h5>Project Title</h5>
            <a href="">
              <i className="ti-zoom-in"></i>
            </a>
            <a href="">
              <i className="ti-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

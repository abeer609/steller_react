import Avatar_1 from "./assets/imgs/avatar-1.jpg";

export default function Testimonial() {
  return (
    <div className="carousel-item active">
      <div className="card testmonial-card border">
        <div className="card-body">
          <img src={Avatar_1} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            nostrum voluptates in enim vel amet?
          </p>
          <h1 className="title">Emma Re</h1>
          <h1 className="subtitle">Graphic Designer</h1>
        </div>
      </div>
    </div>
  );
}

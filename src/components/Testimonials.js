import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <section id="testmonial" className="section">
      <div className="container text-center">
        <h6 className="subtitle">Testmonial</h6>
        <h6 className="section-title mb-4">What People Say About Me</h6>
        <p className="mb-5 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
          dignissimos. <br /> rerum commodi corrupti, temporibus non quam.
        </p>

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </div>
      </div>
    </section>
  );
}

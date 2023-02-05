import Work from "./Work";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container text-center">
        <h6 className="subtitle">Portfolio</h6>
        <h6 className="section-title mb-4">Check My Wonderful Works</h6>
        <p className="mb-5 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
          dignissimos. <br /> rerum commodi corrupti, temporibus non quam.
        </p>

        <div className="row">
          <Work />
          <Work />
          <Work />
        </div>
      </div>
    </section>
  );
}

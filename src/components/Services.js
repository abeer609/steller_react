import Service from "./Service";

export default function Services({ info }) {
  return (
    <section id="service" className="section">
      <div className="container text-center">
        <h6 className="subtitle">Service</h6>
        <h6 className="section-title mb-4">What I Do</h6>
        <p className="mb-5 pb-4">{info}</p>

        <div className="row">
          <Service title={"Django"} />
          <Service title={"Django Restframework"} />
          <Service title={"ReactJs"} />
        </div>
      </div>
    </section>
  );
}

import Skill from "./Skill";

export default function Skills() {
  return (
    <section className="section">
      <div className="container text-center">
        <h6 className="subtitle">Skills</h6>
        <h6 className="section-title mb-4">Why Choose me</h6>
        <p className="mb-5 pb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
          dignissimos. <br /> rerum commodi corrupti, temporibus non quam.
        </p>

        <div className="row text-left">
          <Skill title={"django"} progress={90} />
          <Skill title={"django restframework"} progress={85} />
          <Skill title={"reactJs"} progress={50} />
        </div>
      </div>
    </section>
  );
}

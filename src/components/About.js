export default function About({ name, work, bio, avatar }) {
  return (
    <section id="about" className="section mt-3">
      <div className="container mt-5">
        <div className="row text-center text-md-left">
          <div className="col-md-3">
            <img src={avatar} alt="" className="img-thumbnail mb-4" />
          </div>
          <div className="pl-md-4 col-md-9">
            <h6 className="title">{name}</h6>
            <p className="subtitle">{work}</p>
            <p>{bio}</p>
            <button className="btn btn-primary rounded mt-3">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

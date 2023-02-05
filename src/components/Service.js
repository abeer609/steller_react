export default function Service({ title }) {
  return (
    <div className="col-sm-6 col-md-3 mb-4">
      <div className="custom-card card border">
        <div className="card-body">
          <i className="icon ti-crown"></i>
          <h5>{title}</h5>
        </div>
      </div>
    </div>
  );
}

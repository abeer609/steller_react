export default function Skill({ title, progress }) {
  return (
    <div className="col-sm-6">
      <h6 className="mb-3">{title}</h6>
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span>{progress}</span>
        </div>
      </div>
    </div>
  );
}

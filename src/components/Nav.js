import { useState } from "react";
const handleClick = () => {
  console.log("Clicked");
};

export default function Nav() {
  const [show, setShow] = useState(false);
  const nav_toogle = (state) => {
    if (!state) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top`}
      data-spy="affix"
      data-offset-top="0"
    >
      <div className="container">
        <a className="navbar-brand" href="/hlfjd">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testmonial">
                Testmonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className="- btn btn-primary rounded ml-4"
                href="components.html"
              >
                Copmonents
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

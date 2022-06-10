import React from "react";

export default function Info() {
  return (
    <header>
      <div className="img"></div>
      <div className="info--container p-4 pb-3">
        <h1 className="name--title">John Smith</h1>
        <p className="job">Frontend Developer</p>
        <a href="http://www.google.com" className="address--link">
          johnsmith.website
        </a>
        <div className="btn-container mt-4 ">
          <button type="button" className="btn btn-light me-2 fs-6 px-3">
            <i className="bi bi-envelope-fill me-2"></i>
            <a
              href="malito:exemple:exemple.com"
              className="text-decoration-none text-dark"
            >
              {" "}
              email
            </a>
          </button>
          <button type="button" className="btn btn-light px-3">
            <i className="bi bi-linkedin me-2 fs-6"></i>{" "}
            <a
              href="https://www.linkedin.com"
              target={"_blank"}
              rel="noreferrer"
              className="text-light text-decoration-none"
            >
              linkedln
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}

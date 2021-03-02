import { useState } from "react";

import Link from "next/link";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-dark d-flex justify-content-between p-0">
      <div className="container">
        <h1>
          <Link href="/">
            <a className="navbar-brand">
              <i className="bi bi-phone-vibrate"></i>
              {"  "}Social
            </a>
          </Link>
        </h1>
        <div className="d-flex gap-2 align-items-center">
          <i
            className={show ? "bi bi-arrow-up" : "bi bi-arrow-down"}
            onClick={handleShow}
          ></i>
          {show && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/auth">
                  <a className="nav-link">
                    {" "}
                    <i className="bi bi-person-plus"></i> Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/posts">
                  <a className="nav-link">
                    {" "}
                    <i className="bi bi-signpost"></i> Posts
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">
                    <i className="bi bi-file-person"></i> About
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

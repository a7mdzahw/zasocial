import React from "react";

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center my-4">
      <form className="card bg-dark text-light p-3 w-75">
        <h2 className="text-info display-2 text-center">
          <i className="bi bi-person-circle"></i>
        </h2>
        <div className="form-group mt-1">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" name="name" type="text" className="form-control" />
        </div>
        <div className="form-group mt-1">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
          />
        </div>
        <div className="d-grid gap-2 my-3">
          <button className="btn btn-success">
            <i className="bi bi-person-plus"></i> Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

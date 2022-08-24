import React from "react";
import "./style.css";

const SignIn = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Sign In Here</h3>

        <label for="username">Email</label>
        <input type="email" placeholder="Email" id="username" required />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" required />

        <button>Sign In</button>
        <div className="row pt-3 me-0 ">
          <p className="  col-8">New User?</p>
          <a className="text-center col " href="/">
            Sign Up
          </a>
        </div>
      </form>
    </>
  );
};

export default SignIn;

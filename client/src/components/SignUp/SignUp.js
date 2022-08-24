import React from "react";
import "./style.css";

const SignUp = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Sign Up Here</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username" required />
        <label for="username">Email</label>
        <input type="email" placeholder="Email" id="email" required />
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" required />
        <label for="password">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="confirmpassword"
          required
        />
        <button>Sign Up</button>
        <div className="row pt-3 me-0 ">
          <p className="  col-8">Have an Account?</p>
          <a className="text-center col " href="/">
            Sign In
          </a>
        </div>
      </form>
    </>
  );
};

export default SignUp;

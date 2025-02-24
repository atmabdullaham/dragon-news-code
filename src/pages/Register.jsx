import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-4">
        <h2 className="text-2xl font-semibold text-center pt-10">
          Register Your Account
        </h2>
        <div className="card-body">
          <form className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="NAME" />
            {/* photo url */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo Url" />
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 rounded-none">
              Register
            </button>
          </form>
          <p className="text-center font-semibold">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-4">
        <h2 className="text-2xl font-semibold text-center pt-10">
          Login Your Account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 rounded-none">Login</button>
          </fieldset>
          <p className="text-center font-semibold">
            Do not have an account?{" "}
            <Link to="/auth/register" className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

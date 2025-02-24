import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {
  // ........................
  const { userLogin, setUser } = useContext(AuthContext);
  // .........................
  const [error, setError] = useState({});

  // .........................
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  // .........................
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    try {
      const result = await userLogin(email, password);
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      setError((prevError) => ({ ...prevError, login: err.code }));
      // alert(err.code); // Display error in an alert
    }
  };
  return (
    <div className="min-h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 rounded-none p-4">
        <h2 className="text-2xl font-semibold text-center pt-10">
          Login Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            {error.login && (
              <div className="text-sm  text-red-500">{error.login}</div>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 rounded-none">Login</button>
          </form>
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

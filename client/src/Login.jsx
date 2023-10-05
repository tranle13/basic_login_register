import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        if (result.data === "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col border-solid border-[2px] border-black rounded-lg p-10 relative gap-4 after:absolute after:w-full after:h-full after:top-3 after:left-3 after:bg-bubblegum after:rounded-lg after:z-[-1]">
      <h2 className="text-2xl font-extrabold text-center">Login</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="off"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            autoComplete="off"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="border-solid border-[1px] border-black w-max p-2 rounded-md self-center">
          Login
        </button>
      </form>
      <div className="text-xs self-center flex flex-col gap-1">
        <p>Need an account?</p>
        <Link to="/register" className="underline w-max self-center">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;

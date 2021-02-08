import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "../styles/pages/signup-signin.css";

import "react-toastify/dist/ReactToastify.css";
import "../styles/toast.css";

function Signin({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    const response = await axios
      .post("auth", data)
      .then((res) => res.data)
      .catch((err) => {
        toast(err.response.data.message);
      });

    if (response) {
      setToken(response);
      history.push("/");
    }
  }

  return (
    <div className="signup-signin-container">
      <ToastContainer autoClose={3000} hideProgressBar pauseOnHover limit={1} />
      <h1>Login</h1>
      <form className="form">
        <input
          className="input input-outline"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input input-outline"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="input-submit" onClick={handleSubmit}>
          Sign in
        </button>
      </form>
      <h4>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </h4>
    </div>
  );
}

export default Signin;

import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Login = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { state } = useLocation();

  const loginHandler = () => {
    if (username === "aniket" && password === "12345678") {
      setIsUserLoggedIn(true);
    } else {
      alert("invalid email or password");
    }
  };

  const setLoginUserName = (e) => {
    setUsername(e.target.value);
  };

  const setLoginPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {isUserLoggedIn && <Navigate to={state.from} replace />}
      <div className="logincontent">
        <h1 className="loginheader">Login</h1>

        <label className="Label1" htmlFor="UserName ">
          UserName:
        </label>

        <input
          className="username"
          type="email"
          value={username}
          onChange={setLoginUserName}
          required
        />

        <label className="Label2" htmlFor="password">
          Passsword:
        </label>

        <input
          className="password"
          type="password"
          value={password}
          onChange={setLoginPassword}
        />
        <button className="submitbtn" onClick={loginHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;

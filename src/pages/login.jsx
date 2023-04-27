import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Home from "./home";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin")) === true
  );

  console.log(localStorage.getItem("isLogin"));

  const handleSubmit = () => {
    if (name !== "" && password !== "") {
      const user = { name: name, password: password };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLogin", true);
      setIsLogin(true);
    } else {
      alert("Invalid Information");
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    setIsLogin(false);
  };
  console.log(isLogin);
  return (
    <>
      {isLogin === false ? (
        <div>
          <div className="loginContainer">
            Linked{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
          </div>
          <div className="loginWelcome">Welcome back</div>
          <div className="loginText">
            Don't miss your next opportunity, sign in to stay updated on your
            professional world.
          </div>

          <div className="loginContent">
            <div className="loginHeading">Login</div>
            <div className="formInput">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="formInput">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="formButton">
              <Button variant="primary" onClick={() => handleSubmit()}>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Home name={name} password={password} logout={handleLogout} />
      )}
    </>
  );
};

export default Login;

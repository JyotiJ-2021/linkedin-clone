import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Home from "./home";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin")) === true
  );

  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user.name === name && user.password === password) {
      localStorage.setItem("isLogin", true);
      setIsLogin(true);
    } else {
      alert("Invalid Information");
    }
    setName("");
    setPassword("");
  };

  const handleLogout = () => {
    localStorage.setItem("isLogin", false);
    setIsLogin(false);
  };

  return (
    <>
      {isLogin === false ? (
        <div>
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

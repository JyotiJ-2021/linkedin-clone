// import { NavBar, SideBar, Posts, Feeds } from "../components/index";
import React from "react";
import Feeds from "../components/Feeds";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const Home = ({ name, password, logout }) => {
  return (
    <div className="App">
      <NavBar name={name} password={password} logout={logout} />
      <div style={{ textAlign: "center", padding: "10px" }}>
        <a href="">Hiring in a hurry?</a>-Find Talented Pros in record time with
        upwork and keep business moving
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <SideBar name={name} password={password} />
        </div>
        <div className="col-md-6 col-sm-12">
          <Posts name={name} password={password} />
        </div>
        <div className="col-md-3 col-sm-12">
          <Feeds />
        </div>
      </div>
    </div>
  );
};

export default Home;

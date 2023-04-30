import React from "react";
import { Button } from "react-bootstrap";

const NavBar = ({ name, password, logout }) => {
  return (
    <>
      <div className="header">
        <div className="headerLeft">
          <div className="headerLogo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
          </div>
          <div className="headerSearch">
            <i class="bi bi-search"></i>
            <input type="text" name="" id="" placeholder="search" />
          </div>
        </div>
        <div className="headerRight">
          {navOption.map((option, i) => {
            return (
              <div className="headerOptions">
                {option.icon}
                <span>{option.title}</span>
              </div>
            );
          })}
        </div>
        <div>
          <Button style={{ marginTop: "-7px" }} onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </div>
      <div className="mbheader">
        <div className="headerLeft">
          <div className="headerLogo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
            <div className="headerSearch">
              <i class="bi bi-search"></i>
              <input type="text" name="" id="" placeholder="search" />
            </div>
          </div>

          <i class="bi bi-list"></i>
        </div>
        <div className="headerRight">
          {navOption.map((option, i) => {
            return (
              <div className="headerOptions">
                {option.icon}
                <span>{option.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar;

const navOption = [
  {
    icon: <i class="bi bi-house-door-fill"></i>,
    title: "Home",
  },
  { icon: <i class="bi bi-people-fill"></i>, title: "My Network" },
  { icon: <i class="bi bi-chat-dots-fill"></i>, title: "Jobs" },
  {
    icon: <i class="bi bi-briefcase-fill"></i>,
    title: "Messaging",
  },
  { icon: <i class="bi bi-bell-fill"></i>, title: "Notifications" },
  { icon: <i class="bi bi-person-circle"></i>, title: "me" },
  { icon: <i class="bi bi-grid-3x3-gap-fill"></i>, title: "work" },
];

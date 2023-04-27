import React from "react";

const SideBar = ({ name, password }) => {
  return (
    <div className="">
      <div className="sidebar">
        <div className="sidebarProfile">
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/984/880/original/abstract-colorful-geometric-overlapping-background-and-texture-free-vector.jpg"
            alt=""
          />
          <div className="profileDetails">
            <i class="bi bi-camera"></i>
            <h5>Jyoti Kumari</h5>
            <p>Add a photo</p>
          </div>
        </div>
        <div className="connectContent">
          <div className="connect">
            connections
            <br /> Grow your Network
          </div>
          <i class="bi bi-person-plus-fill"></i>
        </div>
      </div>
      <div className="event">
        <div className="items">
          <i class="bi bi-bookmark-fill"></i> My items
        </div>
        <div className="group">
          <span>Groups</span> <span className="events">Event +</span>{" "}
          <span>Follow hashtags</span>{" "}
        </div>
        <div className="more"> Discover More</div>
      </div>
    </div>
  );
};

export default SideBar;

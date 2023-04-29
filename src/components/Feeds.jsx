import React from "react";

const Feeds = () => {
  return (
    <div>
      <div className="rightSidebar">
        <div className="feedContainer">
          <div className="addFeed">Add to your Feed </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            class="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
          </svg>
        </div>

        <div className="hashtagContainer">
          <div className="website">
            <div className="hashtagLogo">
              <i class="bi bi-hash"></i>
            </div>
            <div className="hashtag">
              <p>#Linkedin</p>
              <button>Follow</button>
            </div>
          </div>
          <div className="website">
            <div className="hashtagLogo">
              <i class="bi bi-hash"></i>
            </div>
            <div className="hashtag">
              <p>#Website</p>
              <button>Follow</button>
            </div>
          </div>
        </div>
        <div className="allRecomondation">
          <p>view all recomondation</p>
        </div>
      </div>
      <br />
      <div className="rightSidebar">
        <div>follows</div>
        <hr />
        {followList.map((item, i) => {
          return (
            <div className="feedContainer" key={i}>
              <div className="addFeed">{item} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feeds;

const followList = ["follow1", "follow2", "follow3", "follow4", "follow5"];

import React, { useState } from "react";
import DisplayPost from "./DisplayPost";

let id = 0;
const Posts = ({ name }) => {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState(
    JSON.parse(localStorage.getItem("postlist")) || []
  );
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem("likes")) || 0
  );
  const [comment, setComment] = useState(
    JSON.parse(localStorage.getItem("comment")) || []
  );

  const handlePost = (e) => {
    e.preventDefault();

    const posts = {
      id: id++,
      postedBy: name,
      postText: post,
      likes: likes,
      comments: [
        {
          by: name,
          comment: comment,
        },
      ],
    };
    setPostList([...postList, posts]);
    localStorage.setItem("postlist", JSON.stringify([...postList, posts]));
    setPost("");
  };

  const handleLike = (postId) => {
    // const postIndex = postList.findIndex((post) => post.id === postId);
    // const newLikes = 1;
    // setPostList[postIndex].likes = newLikes;
    // console.log(postList);
    // localStorage.setItem("likes", JSON.stringify([...postList, posts]));
  };

  return (
    <div className="postContainer">
      <div className="postContent">
        <div className="posts">
          <div className="postImg">
            {" "}
            <i class="bi bi-camera"></i>
          </div>
          <div className="postInput">
            <form onSubmit={handlePost}>
              <input
                type="text"
                placeholder="Start a post"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="typesofPost">
          <div className="photo">
            <p>
              <i class="bi bi-image"></i>
            </p>
          </div>
          <div className="video">
            <p>
              <i class="bi bi-play-btn-fill"></i>
            </p>
          </div>
          <div className="eventss">
            <p>
              <i class="bi bi-calendar-date"></i>
            </p>
          </div>
          <div className="article">
            <p>
              <i class="bi bi-card-text"></i>
            </p>
          </div>
        </div>
      </div>
      {postList.length > 0
        ? postList.map((e, i) => {
            return (
              <DisplayPost
                key={i}
                post={e}
                likes={likes}
                handleLike={handleLike(e.id)}
              />
            );
          })
        : "There is no article"}
    </div>
  );
};

export default Posts;

import React, { useState } from "react";
import DisplayPost from "./DisplayPost";
import { v4 as uuidv4 } from "uuid";

const Posts = ({ name }) => {
  const [post, setPost] = useState("");
  const [postList, setPostList] = useState(
    JSON.parse(localStorage.getItem("postlist")) || []
  );
  const [likes, setLikes] = useState(false);
  const [comment, setComment] = useState("");

  const handlePost = (e) => {
    e.preventDefault();

    const posts = {
      id: uuidv4(),
      postedBy: name,
      postText: post,
      likes: false,
      comments: [
        {
          by: name,
          comment: comment,
        },
      ],
    };
    const newPostList = [...postList, posts].reverse();

    setPostList(newPostList);
    localStorage.setItem("postlist", JSON.stringify(newPostList));

    setPost("");
  };

  const handleLike = (postId) => {
    for (let i = 0; i < postList.length; i++) {
      if (postList[i].id === postId) {
        if (postList[i].likes === true) {
          postList[i].likes = false;
        } else {
          postList[i].likes = true;
        }
      }
    }
    window.location.reload();
    localStorage.setItem("postlist", JSON.stringify(postList));
  };

  return (
    <div className="postContainer">
      <div className="postContent">
        <div className="posts">
          <div className="postImg">
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
        ? postList.map((posts, i) => {
            return (
              <DisplayPost
                key={i}
                post={posts}
                handleLike={handleLike}
                likes={likes}
                id={posts.id}
              />
            );
          })
        : "There is no article"}
    </div>
  );
};

export default Posts;

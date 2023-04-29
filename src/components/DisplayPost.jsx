import React, { useState } from "react";
import Comment from "./Comment";

const DisplayPost = ({ post, handleLike, id }) => {
  const [showComments, setshowComments] = useState(false);

  const handleCommentClick = () => {
    setshowComments(!showComments);
  };

  return (
    <div className="displayContainer">
      <div className="displaypostContainer">
        <div className="profilepostContainer">{post.postedBy}</div>
        <div className="nameContainer">
          <p>
            <i class="bi bi-three-dots"></i>{" "}
          </p>
        </div>
      </div>

      <div className="postContents">
        <h1>{post.postText}</h1>
      </div>

      <div className="socials">
        <div className="like" onClick={() => handleLike(post.id)}>
          <p>
            <i class="bi bi-hand-thumbs-up-fill"></i>
            {post.likes ? 1 : 0}
          </p>
        </div>
        <div className="comment" onClick={handleCommentClick}>
          <p>
            <i class="bi bi-chat-text"></i>
          </p>
        </div>
        <div className="repost">
          <p>
            <i class="bi bi-repeat"></i>
          </p>
        </div>
        <div className="share">
          <p>
            <i class="bi bi-send-fill"></i>
          </p>
        </div>
      </div>
      {showComments && <Comment postId={post.id} CommentBy={post} />}
    </div>
  );
};

export default DisplayPost;

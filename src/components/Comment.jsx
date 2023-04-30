import React, { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState(
    JSON.parse(localStorage.getItem(`comments`)) || ""
  );
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    localStorage.setItem(`comments`, JSON.stringify(comments));
    setComments("");
  };

  return (
    <div className="commentContainer">
      <div className="commentDiv">
        <div className="commentProfile"></div>
        <div className="commentInput">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add a comment"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            />
          </form>
        </div>
      </div>
      {comment !== "" && (
        <div className="comments">
          <div className="commetorDetails">
            <p>{comment}</p>
          </div>
          <div className="comment_content"></div>
        </div>
      )}
    </div>
  );
};

export default Comment;

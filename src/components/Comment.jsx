import React, { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState(
    JSON.parse(localStorage.getItem(`comments`)) || []
  );

  const handleSubmit = (e) => {
    setComment(comment);
    localStorage.setItem(`comments`, JSON.stringify(comment));
    setComment("");
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="comments">
        <div className="commetorDetails">
          <p>{comment}</p>
        </div>
        <div className="comment_content"></div>
      </div>
    </div>
  );
};

export default Comment;

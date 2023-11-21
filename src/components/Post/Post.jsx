import React from "react";
import "./post.css";

const Post = () => {
  return (
    <div className="mainContainer">
      <div className="post">
        <h2>134 Posts</h2>
      </div>
      <div className="line">
        <hr className="hr1" noshade/>
        <hr className="hr2"/>
      </div>

      <div className="postContainer">
        <div className="postBox">

          <div className="line1">
            <h3 className="heading">A Changing World Order</h3>
            <img className="like" src="assets/like.png" alt="" />
          </div>

          <div className="line2">
            <p>
              The world is changing at a feverish pace. Friends, colleagues and
              everyone engaged in knowledge work are beginning to sense this,
              including ...
            </p>
          </div>

          <div className="line3">
            <p className="left">
              <span className="span">musing</span> by <br /> anujgosalia
            </p>
            <p className="right">August 2 . 2 mins Read . 102 Views</p>
          </div>

        </div>

        <div className="postBox">

          <div className="line1">
            <h3 className="heading">Indian v/s Australia</h3>
            <img className="like" src="assets/like.png" alt="" />
          </div>

          <div className="line2">
            <p>
              Think about it - this cricket series was akin to therapy.
              <br />
              Laying our childhood trauma up top, working with it slowly and
              surely over two m...
            </p>
          </div>

          <div className="line3">
            <p className="left">
              <span span className="span">
                thought
              </span>{" "}
              by <br />anujgosalia
            </p>
            <p className="right">January 21 . 1 min Read . 156 Views</p>
          </div>
        </div>

        <div className="postBox">
          <div className="line1">
            <h3 className="heading">Write To Build</h3>
            <img className="like" src="assets/like.png" alt="" />
          </div>

          <div className="line2">
            <p>
              Writing is the first step to create:
              <br />
              - stories
              <br />
              - products
              <br />- companies
            </p>
          </div>

          <div className="line3">
            <p className="left">
              <span span className="span">
                thought
              </span>{" "}
              by <br /> anujgosalia
            </p>
            <p className="right">November 18 . 1 min Read . 228 Views</p>
          </div>

        </div>

      </div>

      
    </div>
  );
};

export default Post;

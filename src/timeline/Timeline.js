import React, { useState } from "react";
import "./Timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      username: "m.zayan.kj",
      postImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJmD5BFLSz4kM16W2SOsrpxej3nCwbFadmjA&s",
      caption: "Making memories that will last a lifetime.",
      likes: 245,
      timestamp: "7h",
    },

    {
      username: "mohd_azaan",
      postImg:
        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
      caption: "Living my best life in 2024!",
      likes: 45,
      timestamp: "4h",
    },

    {
      username: "mushir_kn",
      postImg:
        "https://upload.wikimedia.org/wikipedia/commons/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg",
      caption: "Living in my life",
      likes: 45,
      timestamp: "14h",
    },

    {
      username: "sy3d__",
      postImg:
        "https://t3.ftcdn.net/jpg/00/85/97/56/360_F_85975647_vA8t40LHYq6G2JKNoXrafYPqaMFT4HSp.jpg",
      caption: "Embracing the journey, one step at a time.",
      likes: 58,
      timestamp: "1d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeLine-left">
        <div className="timeline-posts">
          {posts.map((post) => (
            <Post
              user={post.username}
              postImg={post.postImg}
              likes={post.likes}
              caption={post.caption}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeLine-right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;

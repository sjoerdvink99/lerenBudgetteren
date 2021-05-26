import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import "./Post.css";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    db.doc(`articles/${postId}`).get((post) =>
      setPost({
        title: post.title,
        timestamp: post.timestamp,
      })
    );
  }, [postId]);

  return (
    <div className='post'>
      <h1>{post.title}</h1>
    </div>
  );
}

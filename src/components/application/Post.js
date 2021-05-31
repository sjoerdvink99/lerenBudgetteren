import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { db } from "../../firebase";
import "./Post.css";

export default function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    db.doc(`articles/${postId}`).get().then((post) =>
      setPost({
        title: post.data().title,
        imageUrl: post.data().imageUrl,
        timestamp: post.data().timestamp,
      })
    );
  }, [postId]);

  return (
    <div className='post'>
      <div className='post__container'>
        <img src={post.imageUrl} alt={post.title} />
        <Typography variant='h4' align='center'>{post.title}</Typography>
        <Typography variant='body1'>{post.text}</Typography>
      </div>
    </div>
  );
}

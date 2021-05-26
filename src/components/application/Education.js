import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import { db } from "../../firebase";
import "./Education.css";

export default function Education() {
  const history = useHistory();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("articles")
      .orderBy("timestamp", "desc")
      .limit(4)
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            imageUrl: doc.data().imageUrl,
            timestamp: doc.data().timestamp,
          }))
        )
      );
  }, []);

  return (
    <div className='education'>
      <Typography variant='h5'>Education</Typography>
      <div className='education__container'>
        {posts?.map(({ id, title, imageUrl, timestamp }) => (
          <div
            key={id}
            className='education__post'
            style={{
              backgroundImage: `url(${imageUrl}) rgba(0, 0, 0, 0.4)`,
              backgroundBlendMode: "multiply",
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='subtitle2'>
              {new Date(timestamp?.toDate()).toLocaleDateString("eu-NL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </Typography>
            <Button
              color='primary'
              variant='contained'
              onClick={() => history.push(`/education/${id}`)}
            >
              Read more
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

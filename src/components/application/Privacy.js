import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Collapsible from 'react-collapsible';
import { Typography, RadioGroup, FormControlLabel,FormControl,FormLabel,Radio } from "@material-ui/core";
import ProfileSidebar from "./ProfileSidebar";
import { db } from "../../firebase";
import "./Privacy.css";

export default function Privacy() {
  const [recom, setRecom] = useState('');
  const [data, setData] = useState('');

  const [articleInfo,setArticleinfo] = useState({});

  useEffect(() => {
    db.doc('privacyPolicy/0uZvR07I9oN1J2xPucGq')
    .get()
    .then((article) => {
      if (article.exists) {
        setArticleinfo({
          text:article.data().text,
        });
      }
      console.log(article)
    });
  });

  return (
    <div className='privacy'>
      <ProfileSidebar />
      <div className='privacy__container'>
        <div className='privacy__head'>
          <Typography variant='h4' align='center'>
            Privacy
          </Typography>
          <div className='preference__head'>
            <Typography align='left'>
              Preferences
            </Typography>
        <div className='preference'>
        <FormControl component="fieldset">
          <FormLabel component="legend">Receive recommendation emails?</FormLabel>
          <RadioGroup name="data" value={recom} onChange={(e)=>{setRecom(e.target.value)}}>
            <FormControlLabel value="weekly" control={<Radio/>} label="Weekly"  />{' '}
            <FormControlLabel value="monthly" control={<Radio/>} label="Monthly"  />{' '}
            <FormControlLabel value="never" control={<Radio/>} label="Never"  />{' '}
          </RadioGroup>
        </FormControl>  
        </div>
        <div className='preference'>
        <FormControl component="fieldset">
          <FormLabel component="legend">Share usage data?</FormLabel>
          <RadioGroup name="data" value={data} onChange={(e)=>{setData(e.target.value)}}>
            <FormControlLabel value="yes" control={<Radio/>} label="Yes"  />{' '}
            <FormControlLabel value="no" control={<Radio/>} label="No"  />{' '}
          </RadioGroup>
        </FormControl>    
        </div>
        <Collapsible className='policy' trigger="Privacy policy">
          <p>
            text hier
            {ReactHtmlParser(articleInfo?.text)}
          </p>
        </Collapsible>
        </div>  
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}


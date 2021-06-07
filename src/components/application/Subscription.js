import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import ProfileSidebar from "./ProfileSidebar";
import "./Subscription.css";

export default function Subscription() {
  return (
    <div className='subscription'>
      <ProfileSidebar />
      <div className='subscription__container'>
        <div className='subscription__head'>
          <Typography variant='h4' align='center'>
            Subscription
          </Typography>
        </div>
        <div className='subscription__main'>
          <div className='subscription__type'>
            <Typography variant='h5' align='center'>
              Silver
            </Typography>
            <Typography variant='h3' align='center'>
              €9,99
            </Typography>
            <hr />
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#3f5a9d" }}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Insight in your income and expenses' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#3f5a9d" }}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Easy to understand blog-posts' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: "#3f5a9d" }}>
                    <Check />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Learn about investing' />
              </ListItem>
            </List>
          </div>
          <Button variant='contained' color='primary'>
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import "./Pricing.css";
import { CheckCircle } from "@material-ui/icons";

export default function Pricing() {
  return (
    <div className='pricing'>
      <Typography variant='h3'>Pricing</Typography>
      <div className='pricing__container'>
        <div className='pricing__box'>
          <Typography variant='h5'>Free</Typography>
          <Typography variant='h3' color='primary'>
            0€
          </Typography>
          <Typography variant='subtitle1'>per month</Typography>
          <Button
            color='primary'
            style={{ color: "white" }}
            variant='contained'
            component={Link}
            to='/register'
          >
            Try for free
          </Button>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='primary' />
              </ListItemIcon>
              <ListItemText>
                Budget tool voor het bijhouden van je financieën
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='primary' />
              </ListItemIcon>
              <ListItemText>
                Educatie pagina met de beste tips & tricks
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div className='pricing__box'>
          <Typography variant='h5'>Silver</Typography>
          <Typography variant='h3' color='primary'>
            9,99€
          </Typography>
          <Typography variant='subtitle1'>per month</Typography>
          <Button
            color='primary'
            style={{ color: "white" }}
            variant='contained'
            component={Link}
            to='/register'
          >
            Try for free
          </Button>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='primary' />
              </ListItemIcon>
              <ListItemText>
                Budget tool voor het bijhouden van je financieën
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='primary' />
              </ListItemIcon>
              <ListItemText>
                Educatie pagina met de beste tips & tricks
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div className='pricing__box'>
          <Typography variant='h5'>Gold</Typography>
          <Typography variant='h3' color='primary'>
            19,99€
          </Typography>
          <Typography variant='subtitle1'>per month</Typography>
          <Button
            color='primary'
            style={{ color: "white" }}
            variant='contained'
            component={Link}
            to='/register'
          >
            Try for free
          </Button>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='primary' />
              </ListItemIcon>
              <ListItemText>
                Budget tool voor het bijhouden van je financieën
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color='primary' />
              </ListItemIcon>
              <ListItemText>
                Educatie pagina met de beste tips & tricks
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

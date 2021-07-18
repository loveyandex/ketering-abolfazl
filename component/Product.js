import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
   <ul class="cards">
  <li>
    <a href="" class="card">
      <img src={props.imgsrc} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__header-text">
            <h5 class="card__title">     <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>        {props.price}<br/>
{props.name}</h5>            
          </div>
        </div>
        <p class="card__description">{props.descr}</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src={props.imgsrc} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src={props.imgsrc} alt="" />
          <div class="card__header-text">
            <h3 class="card__title">  <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>        {props.price}<br/>
{props.name}</h3>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src={props.imgsrc} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <div class="card__header-text">
            <h5 class="card__title">     <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>        {props.price}<br/>
{props.name}</h5>            
          </div>
        </div>
        <p class="card__description">{props.descr}</p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">kim Cattrall</h3>
            <span class="card__status">3 hours ago</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>    
</ul>
  );
}

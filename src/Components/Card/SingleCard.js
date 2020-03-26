import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  Card,
  Fab,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './SingleCard.css'

const useStyles = makeStyles(theme => ({
  media: {
    height: 200,
    backgroundSize: 'contain'
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  singleCard: {
    justifyContent: 'center',
    marginBottom: '10px'
  }
}));

const SingleCard = (props) => {
  const classes = useStyles();
  const {
    id,
    name,
    image,
    gender,
    house,
    dateOfBirth,
    wand: {
      wood,
      core
    }
  } = props.character;

const {isFev}=props
  return (
    <Card>
      <CardHeader
        title={name}
        align="center"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <ul>
          <li><strong>Gender</strong> {gender}</li>
          <li><strong>House:</strong> {house}</li>
          <li><strong>DOB:</strong> {dateOfBirth}</li>
          <li><strong>Wand:</strong> {wood} ({core})</li>
        </ul>
      </CardContent>
      <CardActions className={classes.singleCard} >
        <Fab
          size="medium"
          color = {
            isFev ? 'primary' : 'secondary'
          }
          aria-label="like"
          variant="extended"
          className={classes.margin}
          onClick={()=>props.handleAddFev(id)}
        >
          <FavoriteIcon className={classes.extendedIcon} />
          {isFev ?'Remove from Favorite':'Add to Favorite'}
        </Fab>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { convertHeightToMeter, convertWeightToKg } from '../utils/utils';

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    minHeight: 600
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${props.data.picture.url}`}
          
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {buildName(props.data.firstname, props.data.lastname)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ranking : {props.data.stats.rank}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Height: {convertHeightToMeter(props.data.stats.height)} m
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Weight: {convertWeightToKg(props.data.stats.weight)} Kg
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function buildName(firstname, lastname) {
    return `${firstname} ${lastname}`
}

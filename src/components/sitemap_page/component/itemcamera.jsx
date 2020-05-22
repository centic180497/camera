import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip } from '@material-ui/core';
import { Visibility as VisibilityIcon, Info as InfoIcon } from '@material-ui/icons';
// import camera1 from './../../../assets/images/5f53ee40-780f-11ea-b436-bb4f45b7d39a_thum.jpg';

const styles = {
  card: {
    display: 'flex',
    cursor: 'pointer',
    marginBottom: 5,
    background: 'transparent',
  },
  cardActive: {
    background: '#00000014',
    display: 'flex',
    cursor: 'pointer',
    marginBottom: 5,
  },
  image: {
    width: 130,
    display: 'block',
  },
  img: {
    width: '100%',
    paddingTop: '56%',
  },
  contentCard: {
    padding: '6px 0px 0 20px !important',
  },
  nameCamera: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
  },
  address: {
    fontSize: 13,
    color: 'black',
  },
  icon: {
    padding: 6,
  },
  cardActions: {
    padding: 0,
  },
  tooltip: {
    padding: 0,
  },
};

class ItemCamera extends Component {
  render() {
    const { classes, showdata, camera, markerActive,showpopup } = this.props;

    return (
      <div>
        <Card className={showpopup===camera.id?classes.cardActive:classes.card} onClick={() => showdata(camera)}>
          <div className={classes.image}>
            {/* <CardMedia className={classes.img} image={camera1} title="Contemplative Reptile" /> */}
          </div>
          <CardContent className={classes.contentCard}>
            <Typography gutterBottom variant="h5" className={classes.nameCamera}>
              {camera.nameCamera}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.address} noWrap>
              {camera.address}
            </Typography>
            <CardActions className={classes.cardActions}>
              <Tooltip title="Theo dõi" arrow className={classes.tooltip}>
                <IconButton size="small">
                  <VisibilityIcon className={classes.icon} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Thông tin" arrow className={classes.tooltip}>
                <IconButton size="small">
                  <InfoIcon className={classes.icon} />
                </IconButton>
              </Tooltip>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ItemCamera);
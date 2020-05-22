import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { Tab, Tabs, Paper, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card, CardMedia } from '@material-ui/core/';
import Tooltip from '@material-ui/core/Tooltip';
import DashboardLayout from 'components/dashboard_layout';

const SitemapPage = () => (
  <DashboardLayout>
    <DashboardLayout title="BẢN ĐỒ CAMERA">
      <SitemapPage />
    </DashboardLayout>
  </DashboardLayout>
);
const styles = (theme) => ({
  list: {
    height: '100%'
  },
  customTab: {
    width: '100%',
    height: '100%',
  },
  customCard: {
    padding: 0,
    '&:last-child': {
      padding: 0,
    },
  },
  blacklist: {
    marginTop: '1px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    whiteSpace: "nowrap"
  },
  size: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  listCard: {
    display: "flex",
    flexDirection: "column"
  },
  siteMap: {
    display: "flex",
    height: "100vh",
    width: "100%"
  },
  infoCamera: {
    width: 320,
    padding: 10
  },
  map: {
    width: "100%",
    height: "100%"
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    justifyContent: "flex-start"
  },
  media: {
    height: 70,
    width: 70
  },
  textInfo: {
    marginLeft: 10
  }
});
class Itemlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      bgColor: '',
      idActive: ''
    };
  }
  render() {
    const { classes, itemCamera } = this.props;
    console.log(this.props);

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <div className={classes.textInfo}>
            <Typography variant="body1" component="p" className={classes.title}>
              {itemCamera.licensePlate}
            </Typography>
            <Typography variant="body2" component="p" className={classes.title}>
              {itemCamera.adress}
            </Typography>
            <Typography variant="body2" component="p" className={classes.title}>
              {itemCamera.distric}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {itemCamera.date}
            </Typography>
          </div>

        </Card>

      </div>
    );
  }
}

Itemlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Itemlist);

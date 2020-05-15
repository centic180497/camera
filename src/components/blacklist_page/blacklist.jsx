import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DashboardLayout from 'components/dashboard_layout';
import Itemlist from 'components/blacklist_page/components/itemlistblack';
import ItemMap from 'components/blacklist_page/gg map/map'

const SitemapPage = () => (
  <DashboardLayout>
    <DashboardLayout title="BẢN ĐỒ CAMERA">
      <SitemapPage />
    </DashboardLayout>
  </DashboardLayout>
);

const styles = (theme) => ({
  root: {
    width: '210px',
    zIndex: 3,
    boxShadow: '5px 0 5px -5px #333',
    height: '100%',
    position: 'relative',
  },
  map:{
    height: '100%',
    position: 'relative',
  },
  wrapGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'start',
    height: '100%',
  },
  bground: {
    backgroundColor: '#e0e0e0',
  },
  paper: {
    color: theme.palette.text.secondary,
    height: '100%',
    paddingLeft: '8px',
    paddingRight: '10px',
  },
  customTab: {
    width: '100%',
  },
  customCard: {
    padding: 0,
    '&:last-child': {
      padding: 0,
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginLeft:'16px'
  },
  fab: {
    position: 'absolute',
    bottom: '0',
    right: '0',
  },
  iconeditbuton: {
    padding: '0',
  },
  icondeletebuton:{
    padding:'0',
  },
  size: {
    fontSize: 16,
  },
  listblck: {
    flexGrow: 1,
    zIndex:'9999',
    left:'191px',
    boxShadow: '5px 0 5px -5px #333',
    height:'100%',
    position:'absolute',
    background: '#ffffff',
    top: '0',
  },
  blacklist: {
    marginTop: '1px',
  },
  listmenu:{
    width:'100%',
  },
  link: {
    textDecoration: 'none',
  },
  setitem:{
    marginLeft:'16px',
  },
  iconedit: {
    fontSize: '15px',
    padding: 0,
  },
  icondelete: {
    fontSize: '15px',
    padding: 0,
    marginLeft:'8px',
  },
  sizeitem:{
    fontSize:'14px'
  }
});
class Blacklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
         itemcamera: [{
          id:0,
          licensePlate: '47h1-1234',
          adress:'Camera Hà Huy Tập 2',
          distric:'Hòa Khê, Thanh Khê, Đà Nẵng',
          date:'26/10/2019 08:43:19'
         }
         ],
          

          licensePlate: '43h1-1234',
          rangeOfVehicle: 'xe máy',
          isactive: false,
        },
        {
          id: 1,
          itemcamera: [{
            id:1,
            licensePlate: '44h1-1234',
            adress:'Camera Hà Huy Tập 1',
            distric:'Hòa Khê, Thanh Khê, Đà Nẵng',
            date:'26/10/2019 08:43:19'
          }

          ],
          isactive: false,
          licensePlate: '5h1-12534',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 2,
          itemcamera:[ {
            id:2,
            licensePlate: '85h1-1234',
            adress:'Camera Hà Huy Tập 1',
            distric:'Hòa Khê, Thanh Khê, Đà Nẵng',
            date:'26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 3,
          itemcamera: [{
            id:3,
            licensePlate: '75h1-1234',
            adress:'Camera Hà Huy Tập 1',
            distric:'Hòa Khê, Thanh Khê, Đà Nẵng',
            date:'26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 4,
          itemcamera: [{
            id:4,
            licensePlate: '75h1-1234',
            adress:'Camera Hà Huy Tập 1',
            distric:'Hòa Khê, Thanh Khê, Đà Nẵng',
            date:'26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 5,
          itemcamera: [{
            id:5,
            licensePlate: '75h1-1234',
            adress:'Camera Hà Huy Tập 1',
            distric:'Hòa Khê, Thanh Khê, Đà Nẵng',
            date:'26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
      ],
      isopen: false,
      bgColor: '',
      idActive: '',
      position: '',
    };
  }


  handleClick(id) {
    console.log(id, 'id');
    this.setState({idActive: id,isopen:!this.state.isopen})
    
    // const fetchData = this.state.list;

    // const newArray = fetchData.find((o) => o.id === item);
    // if (!newArray) {
    //   return;
    // }

    // newArray.isactive = true;

    // return this.setState({
    //   ...this.state,
    //   list: [...this.state.list, (this.state.list[item].isActive = true)],
    // });
  }

  // onClickCheckPositon(item){
  //   console.log(item, 'item');
  //   this.setState({position : item.adress})
  // }

  render() {
    const { classes } = this.props;
    console.log(this.state.list);

    return (
      <div className={classes.wrapGrid}>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Paper className={classes.listmenu}>
              <Tabs value={0} indicatorColor="primary" textColor="primary" aria-label="disabled tabs example">
                <Tab className={classes.customTab} label="Danh Sách" />
              </Tabs>
            </Paper>
          </Grid>
          <Grid className={classes.paper} item xs={12}>
            <a href="#" className={classes.link}>
              {this.state.list.map((item) => {
                return (
                  <Fragment>
                    <Card
                    className={this.state.idActive === item.id ? classes.bground : classes.blacklist}
                    onClick={() => {
                      this.handleClick(item.id);
                    }}
                    >
                    <CardContent className={classes.customCard}>
                      <div className={classes.setitem}>
                        <Typography variant="h1" component="h1" className={classes.size}>
                          {item.licensePlate}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom className={classes.sizeitem}>
                          {item.rangeOfVehicle}
                        </Typography>
                      </div>
                      <Typography className={classes.title} color="textSecondary">
                        <Tooltip title="Edit">
                          <IconButton aria-label="Edit" className={classes.iconeditbuton}>
                            <EditIcon className={classes.iconedit} />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                          <IconButton aria-label="delete"className={classes.icondelete}>
                            <DeleteIcon className={classes.icondelete} />
                          </IconButton>
                        </Tooltip>
                      </Typography>
                    </CardContent>
                  </Card>
                  {
                    this.state.idActive === item.id && 
                  <Grid item xs={12} className={classes.listblck}>
                    {item.itemcamera.map((camera)=>{
                      return(
                        <Itemlist 
                        itemcamera={camera}
                        onClick={this.onClickCheckPositon}
                      />
                      );
                    })}
                  </Grid>
                  }
                     
                  </Fragment>
                  
                );
              })}
            </a>
            <Tooltip title="Add" aria-label="add">
              <Fab color="primary" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container className={classes.map}> 
          <Grid item xs={12}>
                <ItemMap position={this.state.position}/>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
              <ItemMap position={this.state.position}/>
        </Grid> */}
      </div>
    );
  }
}

Blacklist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blacklist);

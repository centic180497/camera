import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DashboardLayout from 'components/dashboard_layout';
import Itemlist from 'components/blacklist_page/components/itemlistblack';
import ItemMap from 'components/blacklist_page/gg map/map';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CardActionArea, CardMedia , DialogActions, DialogContent, DialogTitle, FormHelperText, Tooltip, Dialog, Button, Grid, Card, Paper, Tabs, Tab, Typography, CardContent, IconButton, TextField, Fab } from '@material-ui/core';
import { Close as CloseIcon, Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import "./components/index.css"

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
  listmenu: {
    width: '100%',
  },
  customTab: {
    width: '100%',
  },
  paper: {
    color: theme.palette.text.secondary,
    height: '100%',
    paddingLeft: '8px',
    paddingRight: '10px',
  },
  listCard: {
    display: "flex",
    flexDirection: "column"
  },
  bground: {
    backgroundColor: '#e0e0e0',
  },
  customCard: {
    padding: 0,
    margin: "0 15px",
    '&:last-child': {
      padding: 0,
    },
  },
  size: {
    fontSize: 16,
  },
  sizeitem: {
    fontSize: '14px'
  },
  map: {
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
  blacklist: {
    marginTop: '3px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
 
  fab: {
    position: 'absolute',
    bottom: 100,
    right: '0',
  },
  iconeditbuton: {
    padding: '0',
  },
  icondeletebuton: {
    padding: '0',
  },
  listblck: {
    flexGrow: 1,
    zIndex: '9999',
    left: '101%',
    boxShadow: '5px 0 5px -5px #333',
    height: '100%',
    position: 'absolute',
    background: '#ffffff',
    top: '0',
  },
  link: {
    textDecoration: 'none',
  },
  setitem: {
    // marginLeft: '16px',
  },
  iconedit: {
    fontSize: '15px',
    padding: 0,
  },
  icondelete: {
    fontSize: '15px',
    padding: 0,
    // marginLeft: '8px',
  },
  color: {
    color: "red",
  },
  formadd: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  setheight: {
    height: '100%'
  },
  scroll: {

  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
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
  title:{
    fontSize:14,
    paddingLeft:'6px'
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
  },
  tooltip: {
    padding: 5,
    marginRight: 5
  },
  logtitle:{
    margin: '0',
    padding: '8px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - 100px)"
  },
  logblack:{
    fontSize: '1.25rem',
    fontFamily: 'Roboto, Helvetica, Arial, sanSerif',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
    margin:'6px'
  },
});
class Blacklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 0,
          itemcamera: [{
            id: 0,
            licensePlate: '47h1-1234',
            adress: 'Camera Hà Huy Tập 2',
            distric: 'Hòa Khê, Thanh Khê, Đà Nẵng',
            date: '26/10/2019 08:43:19'
          }
          ],


          licensePlate: '43h1-1234',
          rangeOfVehicle: 'xe máy',
          isactive: false,
        },
        {
          id: 1,
          itemcamera: [{
            id: 1,
            licensePlate: '44h1-1234',
            adress: 'Camera Hà Huy Tập 1',
            distric: 'Hòa Khê, Thanh Khê, Đà Nẵng',
            date: '26/10/2019 08:43:19'
          }

          ],
          isactive: false,
          licensePlate: '5h1-12534',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 2,
          itemcamera: [{
            id: 2,
            licensePlate: '85h1-1234',
            adress: 'Camera Hà Huy Tập 1',
            distric: 'Hòa Khê, Thanh Khê, Đà Nẵng',
            date: '26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 3,
          itemcamera: [{
            id: 3,
            licensePlate: '75h1-1234',
            adress: 'Camera Hà Huy Tập 1',
            distric: 'Hòa Khê, Thanh Khê, Đà Nẵng',
            date: '26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 4,
          itemcamera: [{
            id: 4,
            licensePlate: '75h1-1234',
            adress: 'Camera Hà Huy Tập 1',
            distric: 'Hòa Khê, Thanh Khê, Đà Nẵng',
            date: '26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
        {
          id: 5,
          itemcamera: [{
            id: 5,
            licensePlate: '75h1-1234',
            adress: 'Camera Hà Huy Tập 1',
            distric: 'Hòa Khê, Thanh Khê, Đà Nẵng',
            date: '26/10/2019 08:43:19'

          }],
          isactive: false,
          licensePlate: '75h1-1234',
          rangeOfVehicle: 'xe máy',
        },
      ],
      isOpen: false,
      bgColor: '',
      idActive: '',
      position: '',
      check: '',
      dataEdit: '',
      itemCamera: null
    };
  }


  handleClick(id) {
    const { list } = this.state;
    this.setState({ idActive: id })
    const itemCamera = list.filter( item => item.id === id );
    this.setState({
      itemCamera: itemCamera[0].itemcamera[0]
    })
    console.log("itemCamera filter", itemCamera);

  }
  handleClose = () => {
    this.setState({ isOpen: false })
  };

  // onClickCheckPositon(item){
  //   console.log(item, 'item');
  //   this.setState({position : item.adress})
  // }
  showModal(e, item) {
    if (item) {
      this.setState({ dataEdit: item })
    } else {
      this.setState({ dataEdit: '' })
    }
    this.setState({ isOpen: true })


  }
  render() {
    const { classes } = this.props;
    const { itemCamera } = this.state;
    console.log("itemCamera state", itemCamera);
    

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
            <Scrollbars>

              <div className={classes.listCard}>


                {this.state.list.map((item) => {
                  return (
                    <Fragment>

                      <Card
                        key={item.id}
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
                            <Tooltip title="Edit" className={classes.tooltip}>
                              <IconButton aria-label="Edit" className={classes.iconeditbuton} onClick={e => this.showModal(e, item)}>
                                <EditIcon className={classes.iconedit} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Delete" className={classes.tooltip}>
                              <IconButton aria-label="delete" className={classes.icondelete}>
                                <DeleteIcon className={classes.icondelete} />
                              </IconButton>
                            </Tooltip>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Fragment>
                  );
                })}

                <Tooltip title="Add" aria-label="add">
                  <Fab color="primary" className={classes.fab} onClick={e => this.showModal(e)}>
                    <AddIcon />
                  </Fab>
                </Tooltip>
                <Dialog open={this.state.isOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title-h6">
                  <div className={classes.dialog}>
                    <div className={classes.logtitle}>
                      <h6 className={classes.logblack}>
                        {this.state.dataEdit ? "sửa danh sách đen" : "Thêm phương tiên vi phạm vào danh sách đen"}
                      </h6>
                      <IconButton aria-label="close" className={classes.closeButton} onClick={this.handleClose} >
                          <CloseIcon />
                      </IconButton>
                    </div> 
                    <Formik
                      initialValues={{
                        xe: "",
                        bsx: "",
                      }}
                      validationSchema={Yup.object({
                        bsx: Yup.string()
                          .required("Mô tả không được để trống"),
                      })}
                    >

                      {(propsFormik) => (
                        <Form className={classes.formadd}>
                          <DialogContent>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              name="xe"
                              label="Biển số xe"
                              type="email"
                              variant="outlined"
                              fullWidth
                              defaultValue={this.state.dataEdit?.licensePlate || ''}
                              onChange={propsFormik.handleChange}
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              name="bsx"
                              label="Mô tả"
                              type="email"
                              variant="outlined"
                              fullWidth
                              defaultValue={this.state.dataEdit?.rangeOfVehicle || ''}
                              onChange={propsFormik.handleChange}
                            />
                            <div>
                              <FormHelperText className={classes.color}>
                                {propsFormik.errors.bsx}
                              </FormHelperText>
                            </div>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={this.handleClose} variant="contained">
                                  Hủy
                            </Button>
                            <Button onClick={this.handleClose} color="primary" variant="contained">
                                  Thêm
                            </Button>
                          </DialogActions>
                        </Form>
                      )}
                    </Formik>
                  
                  </div>
                    </Dialog>

                  </div>
            </Scrollbars>

          </Grid>
        </Grid>
        <div className={classes.siteMap}>
          {
            itemCamera ?  <div className={classes.infoCamera}>
                   <Paper>
                    <Itemlist
                      key={itemCamera.id}
                      itemCamera={itemCamera}
                    />
                 </Paper>
              
             </div> : null
          }
          <div className={classes.map}>
            <ItemMap position={this.state.position} />
          </div>
        </div>
      </div>
    );
  }
}

Blacklist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blacklist);

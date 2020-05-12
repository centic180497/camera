import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
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

const SitemapPage = () => (
  <DashboardLayout>
    <DashboardLayout title="BẢN ĐỒ CAMERA">
      <SitemapPage />
    </DashboardLayout>
  </DashboardLayout>
);

const styles = (theme) => ({
	root: {
		flexGrow: 1,
    width: '200px',
    zIndex: 3,
    boxShadow: '5px 0 5px -5px #333',
    height:'100%',
    position:'relative',
  },
  wrapGrid : {
    display : 'flex',
    justifyContent: 'flex-start',
    alignItems: 'start',
    height:'100%'
  },
  bground:{
    backgroundColor: '#e0e0e0',
  },
	paper: {
    color: theme.palette.text.secondary,
    height:'100%',
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
  },
  fab: {
    position: 'absolute',
    bottom: '0',
    right:'0'
  },
  iconeditbuton:{
    padding:'0'
  },
  size:{
    fontSize: 16,
  },
  listblck:{
    height:'100%'
  },
  blacklist:{
    marginTop:'1px',
  },
  link:{
    textDecoration: 'none',
  },
  iconedit:{
    fontSize:'15px',
    padding: 0,
  },
  icondelete:{
    fontSize:'15px',
    padding: 0,
  },

});
class Blacklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen:false,
      bgColor:''
    }
  }
  
  handleClick() { 
    this.setState({isopen:!this.state.isopen,bgColor:[#e0e0e0]});
}
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.wrapGrid}>
				<Grid container className={classes.root}>
					<Grid item xs={12} container className={classes.listmenu} >
						<Paper square>
							<Tabs
								value={0}
								indicatorColor='primary'
								textColor='primary'
								aria-label='disabled tabs example'
							>
							<Tab className={classes.customTab} label='Danh Sách' />
							</Tabs>
						</Paper>
					</Grid>
					<Grid className={classes.paper} item xs={12}>
            <a href="#" className={classes.link} >
            <Card className={classes.blacklist} 
              className={classes.bground[this.state.bgColor]}
               onClick={() => {
                this.handleClick()
              }}
            >
              <CardContent className={classes.customCard}>
                <Typography variant="h1" component="h1" className={classes.size}>
                  75h1-1234
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  dgfdg
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                <Tooltip title="Delete">
                  <IconButton aria-label="Edit" className={classes.iconeditbuton}>
                    <EditIcon className={classes.iconedit}/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon className={classes.icondelete} />
                  </IconButton>
                </Tooltip>
                </Typography>
              </CardContent>
            </Card>
            </a>
            <Card className={classes.blacklist}
               onClick={() => {
                this.handleClick()
              }}
            >
              <CardContent className={classes.customCard}>
                <Typography variant="h6" component="h2" className={classes.size}>
                  75h1-1234
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  dgfdg
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                <Tooltip title="Edit">
                  <IconButton aria-label="Edit" className={classes.iconeditbuton}>
                    <EditIcon className={classes.iconedit}/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton aria-label="delete">
                    <DeleteIcon className={classes.icondelete} />
                  </IconButton>
                </Tooltip>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.blacklist}
              onClick={() => {
                this.handleClick()
              }}
            >
              <CardContent className={classes.customCard}>
                <Typography variant="h6" component="h2" className={classes.size}>
                  75h1-1234
                </Typography>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  dgfdg
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                <Tooltip title="Edit">
                  <IconButton aria-label="Edit" className={classes.iconeditbuton}>
                    <EditIcon className={classes.iconedit}/>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton aria-label="delete" className={classes.iconeditdelete}>
                    <DeleteIcon className={classes.icondelete} />
                  </IconButton>
                </Tooltip>
                </Typography>
              </CardContent>
            </Card>
            <Tooltip title="Add" aria-label="add">
              <Fab color="primary" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Tooltip>
					</Grid>
				</Grid>
     `  <Grid item xs={12} className={classes.listblck}>
            {this.state.isopen?<Itemlist/>:""}
        </Grid>
			</div>
		);
	}
}


Blacklist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blacklist);

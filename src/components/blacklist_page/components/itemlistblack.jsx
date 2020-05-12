import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {Tab,Tabs,Paper,} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
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
	root: {
		flexGrow: 1,
		width: '320px',
        boxShadow: '5px 0 5px -5px #333',
        height:'100%',
        paddingLeft: '8px',
        paddingRight: '8px',
    },
    list:{
        height:'100%'
    },
	customTab: {
        width: '100%',
        height:'100%',
	},
	customCard: {
		padding: 0,
		'&:last-child': {
			padding: 0,
		},
    },
    blacklist:{
        marginTop:'1px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      size:{
        fontSize: 16,
      },
      pos: {
        marginBottom: 12,
      },
});
class Itemlist extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Grid container className={classes.list}>
                    <Grid item xs={3} className="class">
                        {/* <img src={logo} alt="Logo" /> */}
                    </Grid>
                    <Grid item xs={9}>
                        <Card className={classes.blacklist}>
                            <CardContent className={classes.customCard}>
                                <Typography variant="h6" component="h4" className={classes.size}>
                                75h1-1234
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Camera Hà Huy Tập 1
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Hòa Khê, Thanh Khê, Đà Nẵng
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    26/10/2019 08:43:19
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.blacklist}>
                            <CardContent className={classes.customCard}>
                                <Typography variant="h6" component="h4" className={classes.size}>
                                75h1-1234
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Camera Hà Huy Tập 1
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Hòa Khê, Thanh Khê, Đà Nẵng
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    26/10/2019 08:43:19
                                </Typography>
                                
                            </CardContent>
                        </Card>
                        <Card className={classes.blacklist}>
                            <CardContent className={classes.customCard}>
                                <Typography variant="h6" component="h4" className={classes.size}>
                                75h1-1234
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Camera Hà Huy Tập 1
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Hòa Khê, Thanh Khê, Đà Nẵng
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    26/10/2019 08:43:19
                                </Typography>
                                
                            </CardContent>
                        </Card>
                        <Card className={classes.blacklist}>
                            <CardContent className={classes.customCard}>
                                <Typography variant="h6" component="h4" className={classes.size}>
                                75h1-1234
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Camera Hà Huy Tập 1
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Hòa Khê, Thanh Khê, Đà Nẵng
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    26/10/2019 08:43:19
                                </Typography>
                                
                            </CardContent>
                        </Card>
                        <Card className={classes.blacklist}>
                            <CardContent className={classes.customCard}>
                                <Typography variant="h6" component="h4" className={classes.size}>
                                75h1-1234
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Camera Hà Huy Tập 1
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.title}>
                                    Hòa Khê, Thanh Khê, Đà Nẵng
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    26/10/2019 08:43:19
                                </Typography>
                                
                            </CardContent>
                        </Card>
             
                    </Grid>
				</Grid>
			</div>
		);
	}
}

Itemlist.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Itemlist);

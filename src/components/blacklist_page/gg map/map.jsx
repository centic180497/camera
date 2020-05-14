import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Grid from "@material-ui/core/Grid";
import {Tab,Tabs,Paper,} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Marker,InfoWindow } from "@react-google-maps/api";
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
		width: '100%',
        height:'100%',
    },
});
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiMarker: [
                {
                    id: 1,
                    text: "marker 1",
                    defaultShowingInfoWindow: false,
                    position: { lat: 16.076877, lng: 108.216349 },
                },
                {
                    id: 2,
                    text: "marker 2",
                    defaultShowingInfoWindow: false,
                    position: { lat: 16.074805, lng: 108.220232 },
                },
            ],
            showingInfoWindow: false,
        };
      }
	render() {
        const { classes } = this.props;
        // handleToggleOpen = () => {
        //     this.setState({
        //         showingInfoWindow: true,
        //     });
        //   };
        // const onMapClicked = (props) => {
        //     if (this.state.showingInfoWindow) {
        //         this.setState({
        //             showingInfoWindow: false,
        //         });
        //     }
        // };

		return (
			<div className={classes.root}>
				<Grid container className={classes.list}>
                    <Grid item xs={12}>
                    <LoadScript
                            // onClick={onMapClicked}
                            id="script-loader"
                            googleMapsApiKey="AIzaSyDb5xOZiLOJAtKJWj4spvQf3UEQvE-3sc4"
                            >
                            <GoogleMap
                                zoom={14}
                                center= {{lat: 16.074805, lng: 108.220232}} 
                            >
                            {this.state.apiMarker.map((ggmap, index) => {
                                return (
                                    <Marker position= {ggmap.position}
                                    onClick={() => this.handleToggleOpen()}
                                    >
                                       {this.state.showingInfoWindow && (
                                            <InfoWindow onCloseClick={() => this.handleToggleClose()}>
                                                <span>Something</span>
                                            </InfoWindow>
                                        )}
                                    </Marker>                                    
                                );
                            })}
                            </GoogleMap>
                    </LoadScript>
                    </Grid>
				</Grid>
			</div>
		);
	}
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Map);

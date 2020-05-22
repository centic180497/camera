import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet';
import {Icon} from "leaflet";
import { withStyles } from '@material-ui/core/styles';
import icon from "../../../assets/images/marker.png";

const styles=(theme)=>({
  root:{
    flexGrow: 1,
    width:'100%',
    height:'100vh',
  },
  map:{
    height:'100vh'
  }
});
const iconcamera = new Icon({
  iconUrl:icon,
  iconSize:[40,40],
  iconAnchor:[25,10]
});
class MapPage extends Component {
  constructor(props){
    super(props);
    this.state={
      marker:[
        {
          id:1,
          position:{lat:16.071280,lng:108.218000},
          camera:'camera hà huy tập 1',
          adress:'Hòa Khê,Thanh Khê,Đà Nẵng'
        },
        {
          id:2,
          position:{lat:16.074540,lng:108.218600},
          camera:'camera hà huy tập 2',
          adress:'Hòa Khê,Thanh Khê,Đà Nẵng'
        },
        {
          id:3,
          position:{lat:16.037670,lng:108.215561},
          camera:'camera hà huy tập 3',
          adress:'Hòa Khê,Thanh Khê,Đà Nẵng'
        },
        {
          id:4,
          position:{lat:16.063100,lng:108.215730},
          camera:'camera hà huy tập 4',
          adress:'Hòa Khê,Thanh Khê,Đà Nẵng'
        },
        {
          id:5,
          position:{lat:16.066100,lng:108.216150},
          camera:'camera hà huy tập 5',
          adress:'Hòa Khê,Thanh Khê,Đà Nẵng'
        }
      ]
    };
  }
  render(){
    const { classes,itemcamera,showdata } = this.props;
   
    
    const position2 = [16.074540,108.218000]
    return(
      <div className={classes.root}>
                <Map center={position2} zoom={15} className={classes.map}>
                    <TileLayer
                    url='http://10.49.46.11:8080/styles/osm-bright/{z}/{x}/{y}.png'
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {this.state.marker.map((marker,index)=>{ 
                      return(
                        <div>
                          <Marker position={marker.position}
                          icon={iconcamera}
                          key={index}
                          onClick={() => showdata(marker)}
                          >
                          
                        </Marker>
                        {itemcamera===marker.id &&(
                          <Popup position={marker.position}>{marker.camera}<br />{marker.id}</Popup>
                          
                        )}
                        </div>
                      
                      )
                    })

                    }
                </Map>
      </div>
    )
  }
}
MapPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles) (MapPage);

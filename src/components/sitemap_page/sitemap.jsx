import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MapPage from '../sitemap_page/component/map';
import Seach from './component/seach'
import { withStyles } from '@material-ui/core/styles';
import Listitem from './component/listitem'



const styles=(theme)=>({
  root:{
    width: '100%',
    display: 'flex',
  },
  map:{
    height:'100vh'
  },
  containerMap: {
    height: '100%',
    width: 'calc(100% - 400px)',
    position: 'relative',
    overflow: 'hidden',
  },
  formAndListCamera: {
    position: 'relative',
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 50px)',
    background: '#fafafa',
    boxShadow: '-3px 0px 10px #00000094',
  },
});

class SitemapPage extends Component {
  constructor(props){
    super(props);
    this.state={
      showpopup:'',
      itemcamera:'',

    };
    this.showdata = this.showdata.bind(this);
  }
  showdata=(data,)=>{
    // console.log(data);
    
    this.setState({
      itemcamera:data.id,
      showpopup:data.id
    });
    // console.log(this.state.showpopup);
    
  };

  render(){
    const { classes } = this.props;
    const { itemcamera, showpopup } = this.state;
    return(
      <div className={classes.root}>
        <div className={classes.containerMap}>
         <MapPage itemcamera={itemcamera} showdata={this.showdata}></MapPage>
        </div>
        
        <div className={classes.formAndListCamera}>
          <Seach />
          <Listitem showdata={this.showdata} showpopup={showpopup}/>
        </div>
        
      </div>
    )
  }
}
SitemapPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SitemapPage);

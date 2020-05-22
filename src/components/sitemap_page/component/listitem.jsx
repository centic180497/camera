import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';

import ItemCamera from './itemcamera';

const styles = {
  cameras: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  boxScrollCard: {
    flexGrow: 1,
  },
  title: {
    margin: 10,
  },
  boxCameraItem: {
    padding: '0 10px',
  },
};

class Listitem extends Component {
  state = {
    listCamera: [
      { id: 1, nameCamera: 'Camera 1', address: 'Hòa Khê, Thanh Khê, Đà Nẵng' },
      { id: 2, nameCamera: 'Camera 2', address: 'Quận ngũ hành sơn, Đà Nẵng' },
      { id: 3, nameCamera: 'Camera 3', address: 'Hải Châu, Đà Nẵng' },
      { id: 4, nameCamera: 'Camera 4', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
      { id: 5, nameCamera: 'Camera 5', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
      { id: 6, nameCamera: 'Camera 6', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
      { id: 7, nameCamera: 'Camera 7', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
    ],
  };
  render() {
    const { classes} = this.props;
    const { listCamera } = this.state;
    return (
      <div className={classes.cameras}>
        <h4 className={classes.title}>
          DANH SACH CAMERA (<span>8</span>)
        </h4>
        <div className={classes.boxScrollCard}>
          <Scrollbars>
            <div className={classes.boxCameraItem}>
              {listCamera.length > 0
                ? listCamera.map((camera) => {
                    return (
                      <ItemCamera 
                        camera={camera}
                        key={camera.id}
                        showdata={this.props.showdata}
                        itemcamera={this.props.itemcamera}
                        showpopup={this.props.showpopup}
                      />
                    );
                  })
                : null}
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Listitem);
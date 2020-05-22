import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  TextField,
  FormGroup,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon} from '@material-ui/icons';
import AutocompleteCheckbox from './autocomplete';

const styles = {
  formSearch: {
    padding: 10,
  },
  heading: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
  },
  input: {
    fontSize: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  labelRoot: {
    fontSize: 15,
  }
};

class Seach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citys: [{ id: 1, name: 'Thanh pho Da Nang' }],
      districts: [
        { id: 1, name: 'Quan Hai Chau' },
        { id: 2, name: 'Quan Cam Le' },
        { id: 3, name: 'Quan Ngu Hanh Son' },
      ],
      communes: [
        { id: 1, name: 'Phuong Abc' },
        { id: 2, name: 'Phuong Bac My An' },
      ],
      streets: [
        { id: 1, name: 'Nam Ky khoi nghia' },
        { id: 2, name: 'Nui Thanh' },
      ],
    };
  }

  render() {
    const { citys, districts, communes, streets } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.formSearch}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography className={classes.heading}>TÌM KIẾM NÂNG CAO</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <form className={classes.form} noValidate autoComplete="off">
              <FormGroup className={classes.formGroup}>
                <TextField
                  label="Nhập từ khóa tìm kiếm"
                  type="search"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    classes: {
                      input: classes.input,
                    },
                  }}
                  InputLabelProps={{
                    classes: {
                      root: classes.labelRoot,
                    },
                  }}
                />
              </FormGroup>
              <AutocompleteCheckbox option={citys} label="Tỉnh/Thành phố" />
              <AutocompleteCheckbox option={districts} label="Quận/Huyện" />
              <AutocompleteCheckbox option={communes} label="Phường/Xã" />
              <AutocompleteCheckbox option={streets} label="Nhóm" />
              
            </form>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Seach);
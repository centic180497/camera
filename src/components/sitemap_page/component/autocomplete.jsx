import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, FormGroup, Checkbox } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon, CheckBox as CheckBoxIcon } from '@material-ui/icons';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const styles = {
  formGroup: {
    marginBottom: 16,
  },
  labelRoot: {
    fontSize: 15,
  },
  checkBox: {
    marginRight: 8,
    padding: 4,
  },
};

class AutocompleteCheckbox extends Component {
  render() {
    const { classes, option, label } = this.props;
    return (
      <FormGroup className={classes.formGroup}>
        <Autocomplete
          multiple
          size="small"
          options={option}
          getOptionLabel={(option) => option.name}
          noOptionsText={'Không có lựa chọn'}
          disableCloseOnSelect
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                size="small"
                checkedIcon={checkedIcon}
                className={classes.checkBox}
                checked={selected}
                color="primary"
              />
              {option.name}
            </React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.labelRoot,
                },
              }}
            />
          )}
        />
      </FormGroup>
    );
  }
}

export default withStyles(styles)(AutocompleteCheckbox);
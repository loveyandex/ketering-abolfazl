import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import ThreeSixtyIcon  from '@material-ui/icons/ThreeSixty';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="search-box">
        <TextField id="filled-x`search" label="جستجوی..." type="search" variant="filled" className="search-header-input" />
        <SearchIcon className="search-header"/>

      </div>
    </form>
  );
}



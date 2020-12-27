import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';

const styles = {
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  }
};

function LetterAv(props) {
  const { classes } = props;
  return (
    <Avatar className={classes.orangeAvatar}>PRT</Avatar>
  );
}

LetterAv.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAv);
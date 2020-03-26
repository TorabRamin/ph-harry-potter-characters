import React from 'react';
import {
  Link,
  Typography,
} from '@material-ui/core';

const Footer = () => {
  return (
    <Typography align="center" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://meetramin.com/">
        Torab Ramin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Footer;
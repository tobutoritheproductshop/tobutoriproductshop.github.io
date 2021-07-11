import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const useStyles = makeStyles({
    header: {
      backgroundColor: "transparent"
    },
    tabLabel: {
        color: 'white',
        fontFamily: "Roboto",
        fontSize: '22px',
        fontStyle: 'bold',
      }
  });

export default function Navbar(props) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="sticky" className={classes.header}>
          <Tabs>
          <Tab label={<span className={classes.tabLabel}>About</span>} />
          <Tab label={<span className={classes.tabLabel}>Artworks</span>} />
          <Tab label={<span className={classes.tabLabel}>Contact</span>} />
        </Tabs>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
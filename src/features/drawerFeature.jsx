import React from 'react';
import clsx from 'clsx';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles( theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menu: {
    color: theme.palette.dark.main
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.dark.main
  }

}));

const MenuItems = [
  { text: 'Home', url: '/' },
  { text: 'Services', url: '/services' },
  { text: 'My Journey', url: '/my-journey' },
  { text: 'Contact Us', url: '/contact-us' },
  { component: <Divider /> },
  { text: 'Questionairre', url: '/questionairre' },
];

export default function DrawerFeature({ anchor }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {MenuItems.map( ({text, url, component}) => {
          if (component) return component;
          return (
            <ListItem button key={text}>
              <Link to={url} className={classes.link}>
                <ListItemText primary={text} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <Button onClick={toggleDrawer(anchor, true)}>
        <MenuIcon className={classes.menu} />
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </>
  );
}

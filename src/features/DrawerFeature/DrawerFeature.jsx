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

import menuItems from '@components/Header/header.data.js'

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menu: {
    color: theme.palette.dark.main,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.dark.main,
  },
}));

const MenuItems = [
  { text: 'Home', url: '/' },
  { text: 'Services', url: '/services' },
  { text: 'My Journey', url: '/my-journey' },
  { text: 'Contact Us', url: '/contact-us' },
  { component: <Divider />, text: 'divider1' },
  { text: 'Questionairre', url: '/questionairre' },
];

export default function DrawerFeature({ anchor, childClasses }) {
  const sx = useStyles();
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
      className={clsx(sx.list, {
        [sx.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map(({ text, url, type }) => {
          if (type === 'divider') return <Divider />;
          return (
            <Link to={url} key={text} className={sx.link}>
              <ListItem button >
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <Button className={`${childClasses}`} onClick={toggleDrawer(anchor, true)}>
        <MenuIcon className={sx.menu} />
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

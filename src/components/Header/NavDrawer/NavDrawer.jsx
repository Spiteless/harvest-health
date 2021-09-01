import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Link,
} from '@material-ui/core';

import WrappedLink from '@components/WrappedLink';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import menuItems from '../../../assets/data/header.json';

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

export default function DrawerFeature({ anchor }) {
  const sx = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (open, event) => {
    console.log('toggle drawer', open, event);
    if (event) {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
    }
    let newState = open;
    // if (event.key === 'Escape') newState = false;
    setState({ ...state, [anchor]: newState });
  };

  const handleClick = event => {
    console.log('handleClick', event);
    toggleDrawer(true, event);
  };

  const DrawerContent = ({ anchor }) => (
    <div
      className={clsx(sx.list, {
        [sx.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={event => toggleDrawer(false, event)}
      // onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, url, divider }, index) => {
          if (divider) return <Divider key={index.toString()} />;
          return (
            <WrappedLink
              to={url}
              key={index.toString()}
              className={sx.link}
              
            >
              <ListItem
                button
                onClick={event => {
                  toggleDrawer(false, event);
                }}
                
                key={index.toString()}
              >
                <ListItemText primary={text} />
              </ListItem>
            </WrappedLink>
          );
        })}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        onClick={event => {
          toggleDrawer(true, event);
        }}
      >
        <MenuIcon className={sx.menu} />
      </IconButton>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={event => {
          console.log('onClose hit');
          toggleDrawer(false, event);
        }}
      >
        <DrawerContent anchor={anchor} />
      </Drawer>
    </>
  );
}

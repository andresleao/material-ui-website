import React, { useState, useEffect } from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('sm')]: {
      height: '5.5em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '4.5em',
      width: '15em',
    },
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    color: '#FFF',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
  },
  drawnerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: '#FFF',
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  //const iOS = process.browser && /iPad|iPhone|iPod/;
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const menuOptions = [
    {
      name: 'Services',
      navigate: '/services',
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: 'Custom Software Development',
      navigate: '/custom-software',
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: 'iOS/Android App Development',
      navigate: '/mobile-apps',
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: 'Website Development',
      navigate: '/websites',
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    {
      name: 'Home',
      navigate: '/',
      activeIndex: 0,
    },
    {
      name: 'Services',
      navigate: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'simple-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      onMouseOver: (e) => handleClick(e),
    },
    {
      name: 'The Revolution',
      navigate: '/revolution',
      activeIndex: 2,
    },
    {
      name: 'About Us',
      navigate: '/about',
      activeIndex: 3,
    },
    {
      name: 'Contact Us',
      navigate: '/contact',
      activeIndex: 4,
    },
  ];

  useEffect(() => {
    // [...menuOptions, ...routes].forEach((route) => {
    //   switch (window.location.pathname) {
    //     case `${route.navigate}`:
    //       if (tabValue !== route.activeIndex) {
    //         setTabValue(route.acticeIndex);
    //         if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
    //           setSelectedIndex(route.selectedIndex);
    //         }
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // });

    switch (window.location.pathname) {
      case '/':
        if (props.tabValue !== 0) {
          props.setTabValue(0);
        }
        break;
      case '/services':
        if (props.tabValue !== 1) {
          props.setTabValue(1);
          props.setSelectedIndex(0);
          break;
        }
        break;
      case '/custom-software':
        if (props.tabValue !== 1) {
          props.setTabValue(1);
          props.setSelectedIndex(1);
        }
        break;
      case '/mobile-apps':
        if (props.tabValue !== 1) {
          props.setTabValue(1);
          props.setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (props.tabValue !== 1) {
          props.setTabValue(1);
          props.setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (props.tabValue !== 2) {
          props.setTabValue(2);
        }
        break;
      case '/about':
        if (props.tabValue !== 3) {
          props.setTabValue(3);
        }
        break;
      case '/contact':
        if (props.tabValue !== 4) {
          props.setTabValue(4);
        }
        break;
      case '/estimate':
        if (props.tabValue !== 5) {
          props.setTabValue(5);
        }
        break;
      default:
        break;
    }
  }, [props.tabValue, props]);

  const handleLogoButton = () => {
    navigate('/');
    props.setTabValue(0);
  };

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={props.tabValue}
        onChange={(e, value) => props.setTabValue(value)}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}-${index}`}
            label={route.name}
            className={classes.tab}
            onClick={() => navigate(`${route.navigate}`)}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.onMouseOver}
          />
        ))}
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => {
            navigate('/estimate');
            props.setTabValue(5);
          }}
        >
          Free Estimate
        </Button>
      </Tabs>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}-${i}`}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              navigate(option.navigate);
              handleMenuItemClick(e, i);
              props.setTabValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.tabValue === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}-${route.activeIndex}`}
              divider
              button
              classes={{ selected: classes.drawerItemSelected }}
              onClick={() => {
                navigate(`${route.navigate}`);
                setOpenDrawer(false);
                props.setTabValue(route.activeIndex);
              }}
              selected={props.tabValue === route.activeIndex}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            onClick={() => {
              navigate('/estimate');
              setOpenDrawer(false);
              props.setTabValue(5);
            }}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            selected={props.tabValue === 5}
          >
            <ListItemText disableTypography className={classes.drawerItem}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawnerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              onClick={handleLogoButton}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;

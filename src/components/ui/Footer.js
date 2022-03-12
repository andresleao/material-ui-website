import { makeStyles } from '@material-ui/styles';

import { Grid } from '@material-ui/core';
import { Hidden } from '@material-ui/core';

import { Link } from 'react-router-dom';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    position: 'absolute',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    zIndex: 1302,
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '15em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '12em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: '#FFF',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',

    [theme.breakpoints.down('sm')]: {
      height: '3em',
      width: '3em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',

    [theme.breakpoints.down('md')]: {
      right: '.6em',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      right: 0,
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/"
                  onClick={() => props.setTabValue(0)}
                >
                  Home
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                <Link
                  className={classes.link}
                  to="/services"
                  onClick={() => {
                    props.setTabValue(1);
                    props.setSelectedIndex(0);
                  }}
                >
                  Services
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/custom-software"
                  onClick={() => {
                    props.setTabValue(1);
                    props.setSelectedIndex(1);
                  }}
                >
                  Custom Software Development
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/mobile-apps"
                  onClick={() => {
                    props.setTabValue(1);
                    props.setSelectedIndex(2);
                  }}
                >
                  iOS/Android App Development
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/websites"
                  onClick={() => {
                    props.setTabValue(1);
                    props.setSelectedIndex(3);
                  }}
                >
                  Website Development
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                <Link
                  className={classes.link}
                  to="/revolution"
                  onClick={() => props.setTabValue(2)}
                >
                  The Revoluiton
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/revolution"
                  onClick={() => props.setTabValue(2)}
                >
                  Vision
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/revolution"
                  onClick={() => props.setTabValue(2)}
                >
                  Technology
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/revolution"
                  onClick={() => props.setTabValue(2)}
                >
                  Process
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/about"
                  onClick={() => props.setTabValue(3)}
                >
                  About us
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/about"
                  onClick={() => props.setTabValue(3)}
                >
                  History
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={classes.link}
                  to="/about"
                  onClick={() => props.setTabValue(3)}
                >
                  Team
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                <Link
                  className={classes.link}
                  to="/contact"
                  onClick={() => props.setTabValue(4)}
                >
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />

      <Grid
        container
        justifyContent="flex-end"
        className={classes.socialContainer}
        spacing={2}
      >
        <Grid
          item
          component={'a'}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="Facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="Twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="Instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;

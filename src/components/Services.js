import { useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

import { Button } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';

import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
      marginTop: 0,
      paddingTop: 0,
    },
  },
  servicesTitle: {
    marginLeft: '5em',
    position: 'relative',

    '&::before': {
      content: '""',
      display: 'inline-block',
      zIndex: '-1',
      backgroundColor: theme.palette.common.orange,
      width: '.7em',
      height: '.7em',

      [theme.breakpoints.down('sm')]: {
        marginLeft: 12,
      },
    },

    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();

  return (
    <Grid container direction="column">
      <Grid item style={{ marginTop: matchesSM ? '1em' : '2em' }}>
        <Typography
          variant="h2"
          gutterBottom
          className={classes.servicesTitle}
          align={matchesSM ? 'center' : undefined}
        >
          Services
        </Typography>
      </Grid>

      {/* ********* iOS/Android Block ********* */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                navigate('/mobile-apps');
                props.setTabValue(1);
                props.setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            className={classes.icon}
            style={{ marginRight: matchesSM ? 0 : '5em' }}
          >
            <img src={mobileAppsIcon} alt="Mobile Icon" width="250em" />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital soluctions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                navigate('/custom-software');
                props.setTabValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item className={classes.icon}>
            <img src={customSoftwareIcon} alt="Custom Software Icon" />
          </Grid>
        </Grid>
      </Grid>

      {/* ********* Website Block ********* */}
      <Grid item>
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          style={{ marginBottom: '10em' }}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                navigate('/websites');
                props.setTabValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid
            item
            className={classes.icon}
            style={{ marginRight: matchesSM ? 0 : '5em' }}
          >
            <img src={websitesIcon} alt="Website Icon" width="250em" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;

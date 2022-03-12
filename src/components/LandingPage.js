import { useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import ButtonArrow from '../components/ui/ButtonArrow';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';

import CallToAction from './ui/CallToAction';

import mobileResponsive from '../assets/mobile-responsive.jpg';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    marginBottom: '1em',

    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    minWidth: '21.5em',

    [theme.breakpoints.up('xsm')]: {
      marginLeft: '1em',
    },
  },
  mainPhoto: {
    maxWidth: '39em',
    minWidth: '19em',
    width: '100%',
    height: '100%',
    marginTop: '2em',

    [theme.breakpoints.down('sm')]: {
      maxWidth: '36em',
    },
    [theme.breakpoints.up('765')]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '14em',
      minWidth: '8em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
      marginBottom: '1em',
    },
  },
  buttonContainer: {
    marginTop: '1em',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '16em',
      fontSize: '.9rem',
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '.9rem',
    height: 45,
    width: 145,
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
  heroTittle: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: '15em',
      fontSize: '.9rem',
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    baclgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    baclgroundSize: 'cover',
    //backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('600'));
  const matchesSMD = useMediaQuery(theme.breakpoints.down('766'));

  const navigate = useNavigate();

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/* ********* Hero Block ********* */}
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography
                variant="h2"
                align="center"
                className={classes.heroTittle}
              >
                Bringing West Coast Technology
                <br />
                to the Midwest
              </Typography>
              <Grid
                container
                justifyContent="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.estimateButton}
                    onClick={() => {
                      navigate('/estimate');
                      props.setTabValue(5);
                    }}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => {
                      navigate('/revolution');
                      props.setTabValue(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs item>
              <img
                src={mobileResponsive}
                alt="Devices photos"
                className={classes.mainPhoto}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* ********* Services Block ********* */}
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

        {/* ********* iOS/Android Block ********* */}
        <Grid item>
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justifyContent={matchesSM ? 'center' : 'flex-end'}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
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
              <img src={mobileAppsIcon} alt="Mobile Icon" />
            </Grid>
          </Grid>
        </Grid>

        {/* ********* Website Block ********* */}
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
            <Grid item className={classes.icon}>
              <img src={websitesIcon} alt="Website Icon" />
            </Grid>
          </Grid>
        </Grid>

        {/* ********* The Revolution Block ********* */}
        <Grid item>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ height: '90em', marginTop: '12em' }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: 'center' }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
                    <Button
                      variant="outlined"
                      className={classes.learnButtonHero}
                      onClick={() => {
                        navigate('/revolution');
                        props.setTabValue(2);
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBackground} />
          </Grid>
        </Grid>

        {/* ********* Information Block ********* */}
        <Grid item>
          <Grid
            container
            direction="row"
            style={{ height: '50em', alignItems: 'center' }}
          >
            <Grid
              item
              container
              style={{
                position: 'absolute',
                textAlign: matchesXS ? 'center' : 'inherit',
              }}
              direction={matchesXS ? 'column' : 'row'}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                }}
              >
                <Grid
                  container
                  direction="column"
                  style={{ marginBottom: matchesSMD ? '10em' : 0 }}
                >
                  <Typography variant="h2" style={{ color: '#FFF' }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: 'white', borderColor: 'white' }}
                      onClick={() => {
                        navigate('/about');
                        props.setTabValue(3);
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                  textAlign: matchesSM ? 'center' : 'right',
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: '#FFF' }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Say hello!{' '}
                    <span role="img" aria-label="waving hand">
                      &#128400;
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      className={classes.learnButton}
                      style={{ color: 'white', borderColor: 'white' }}
                      onClick={() => {
                        navigate('/contact');
                        props.setTabValue(4);
                      }}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow width={10} height={10} fill="white" />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <div className={classes.infoBackground} />
          </Grid>
        </Grid>

        {/* ********* Call to Action Block ********* */}
        <Grid item>
          <CallToAction setTabValue={props.setTabValue} />
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;

import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Grid,
  useMediaQuery,
  Typography,
  IconButton,
  Hidden,
} from '@material-ui/core';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import digitalpayments from '../assets/digital-payments.jpg';
import pizzagraph from '../assets/pizzagraph.png';
import root from '../assets/root.svg';
import shipwheel from '../assets/shipwheel.png';
import ux from '../assets/ux.jpg';

import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '.5em',
  },
  iconsContainer: {
    textAlign: 'center',
  },
  itemContainer: {
    maxWidth: '37em',
  },
  digitalPaymentsIcon: {
    maxWidth: '19em',
    minWidth: '10em',
  },
  treeIcon: {
    [theme.breakpoints.down('477')]: {
      height: '15em',
      width: '15em',
    },
    [theme.breakpoints.down('420')]: {
      height: '10em',
      width: '10em',
    },
  },
  ux: {
    maxHeight: 290,
    maxWidth: 275,
    borderRadius: 35,
  },
}));

function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matches960 = useMediaQuery(theme.breakpoints.down('960'));

  const { setTabValue, setSelectedIndex } = props;

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3.5em' }}
          >
            <IconButton onClick={() => setSelectedIndex(0)}>
              <Link to="/services">
                <img src={backArrow} alt="Back to Services Page" />
              </Link>
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? 'center' : undefined}
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton onClick={() => setSelectedIndex(2)}>
              <Link to="/mobile-apps">
                <img
                  src={forwardArrow}
                  alt="Forward to iOS/Android App Development Page"
                />
              </Link>
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={[classes.iconsContainer, classes.rowContainer]}
        style={{ marginTop: '10em', marginBottom: '10em' }}
      >
        <Grid item container direction="column" md style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{
            maxWidth: '40em',
            marginTop: matches960 ? '5em' : 0,
            marginBottom: matches960 ? '5em' : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid item container direction="column" md style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        justifyContent="space-around"
      >
        <Grid
          item
          container
          direction={matches960 ? 'column' : 'row'}
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '8em' : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matches960 ? 'center' : undefined}
              >
                Digital Documents & Data
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : undefined}
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : undefined}
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : undefined}
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item align={matches960 ? 'center' : undefined}>
            <img
              src={digitalpayments}
              alt="Digital Payments"
              className={classes.digitalPaymentsIcon}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction={matches960 ? 'column' : 'row'}
          className={classes.itemContainer}
        >
          <Grid item md align={matches960 ? 'center' : 'right'}>
            <img
              src={pizzagraph}
              alt="Pizza Graph"
              className={classes.pizzagraph}
            />
          </Grid>

          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matches960 ? 'center' : 'right'}>
                Scale
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : 'right'}
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginTop: '13em', marginBottom: '13em' }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={root}
              alt="Tree with roots extending out"
              className={classes.treeIcon}
              height={matches960 ? '300em' : '450em'}
              width={matches960 ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        alignItems={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        justifyContent="space-around"
        style={{ marginBottom: '12em' }}
      >
        <Grid
          item
          container
          direction={matches960 ? 'column' : 'row'}
          className={classes.itemContainer}
          style={{ marginBottom: matchesMD ? '8em' : 0 }}
          md
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matches960 ? 'center' : undefined}
              >
                Automation
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : undefined}
                paragraph
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : undefined}
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : undefined}
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item align={matches960 ? 'center' : undefined}>
            <img
              src={shipwheel}
              alt="Digital Payments"
              className={classes.digitalPaymentsIcon}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matches960 ? 'column' : 'row'}
        >
          <Grid item md align={matches960 ? 'center' : 'right'}>
            <img src={ux} alt="Digital Payments" className={classes.ux} />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matches960 ? 'center' : 'right'}>
                User Experience Design
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : 'right'}
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : 'right'}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                align={matches960 ? 'center' : 'right'}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
}

export default CustomSoftware;

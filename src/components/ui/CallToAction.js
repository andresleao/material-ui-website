import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from '@material-ui/core';

import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '60em',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
    [theme.breakpoints.up('smd')]: {
      backgroundAttachment: 'fixed',
    },
  },

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

function CallToAction(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  // const matches800 = useMediaQuery(theme.breakpoints.down('800'));

  const { setTabValue } = props;

  const navigate = useNavigate();

  return (
    <Grid
      container
      alignItems="center"
      className={classes.background}
      justifyContent={matchesSM ? 'center' : 'space-between'}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          textAlign: matchesSM ? 'center' : 'inherit',
        }}
      >
        <Grid container direction="column">
          <Typography variant="h2">
            Simple Software.
            <br />
            Revolutionary Results.
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: '1.5rem' }}>
            Take advantage of the 21st Century.
          </Typography>
          <Grid
            container
            item
            justifyContent={matchesSM ? 'center' : 'inherit'}
          >
            <Button
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                navigate('/revolution');
                setTabValue(2);
              }}
            >
              <span style={{ marginRight: 5 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.estimateButton}
          onClick={() => {
            navigate('/estimate');
            setTabValue(5);
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToAction;

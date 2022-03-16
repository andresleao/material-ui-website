import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';

import ButtonArrow from './ui/ButtonArrow';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',

    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundPosition: 'center',
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
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    '&:disabled': {
      opacity: '0.7',
      backgroundColor: theme.palette.common.orange,
    },
    [theme.breakpoints.down('392')]: {
      height: 45,
      width: 145,
      fontSize: '0.7rem',
    },
  },
}));

function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
  const matches530 = useMediaQuery(theme.breakpoints.down('530'));

  const navigate = useNavigate();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = (e) => {
    let valid;

    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        if (!valid) {
          setPhoneHelper('Invalid phone number');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get(
        'https://us-central1-material-ui-course-cdc40.cloudfunctions.net/sendMail',
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setAlert({
          open: true,
          message: 'Message sent successfully!',
          backgroundColor: '#4BB543',
        });
      })
      .catch((error) => {
        setLoading(false);
        setAlert({
          open: true,
          message: 'Something went wrong, please try again!',
          backgroundColor: '#FF3232',
        });
      });
  };

  const buttonContent = (
    <>
      Send Message
      <img src={airplane} alt="paper airplace" style={{ marginLeft: '1em' }} />
    </>
  );

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item style={{ marginBottom: '2em' }}>
              <Typography
                variant="h2"
                style={{ lineHeight: 1 }}
                align={matchesMD ? 'center' : undefined}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone icon"
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    href="tel:5555555555"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: '1rem',
                  }}
                >
                  <a
                    href="mailto:andre@gmail.com"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    andre@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: '20em', marginTop: '2em' }}
            >
              <Grid item>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  fullWidth
                  value={email}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  onChange={(e) => onChange(e)}
                  style={{ marginBottom: '0.5em', marginTop: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phone}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  onChange={(e) => onChange(e)}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                placeholder="Tell us more about your project..."
                fullWidth
                multiline
                rows={10}
                value={message}
                className={classes.message}
                id={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: '2em' }}
            >
              <Button
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
              >
                {buttonContent}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        fullScreen={matches530}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? 0 : '1em',
            paddingBottom: matchesXS ? 0 : '1em',
            paddingLeft: matchesXS ? 0 : matchesSM ? '5em' : '10em',
            paddingRight: matchesXS ? 0 : matchesSM ? '5em' : '10em',
          },
        }}
        style={{ zIndex: theme.zIndex.modal + 1 }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center">
                Confirm Message
              </Typography>
            </Grid>

            <Grid item>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Email"
                id="email"
                fullWidth
                value={email}
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                onChange={(e) => onChange(e)}
                style={{ marginBottom: '0.4em', marginTop: '0.4em' }}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Phone"
                id="phone"
                fullWidth
                value={phone}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                onChange={(e) => onChange(e)}
              />
            </Grid>

            <Grid item style={{ maxWidth: matchesSM ? '100%' : '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                fullWidth
                multiline
                rows={10}
                value={message}
                className={classes.message}
                id={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginTop: '2em' }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: '1em' }}
            alignItems="center"
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid item>
              <Button
                color="primary"
                onClick={() => setOpen(false)}
                style={{ fontWeight: 300 }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.sendButton}
                style={{ width: 240 }}
                onClick={() => onConfirm()}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
              >
                {loading ? <CircularProgress size={30} /> : buttonContent}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        alignItems="center"
        justifyContent={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ fontSize: '1.5rem' }}
              align={matchesMD ? 'center' : undefined}
            >
              Take advantage of the 21st Century.
            </Typography>
            <Grid
              item
              container
              justifyContent={matchesMD ? 'center' : 'inherit'}
            >
              <Button
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  navigate('/revolution');
                  props.setTabValue(2);
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
              props.setTabValue(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;

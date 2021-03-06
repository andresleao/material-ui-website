import { makeStyles } from '@material-ui/styles';
import { Grid, Typography, Avatar } from '@material-ui/core';

import history from '../assets/history.svg';
import profile from '../assets/dev.jpg';
import yearbook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  avatar: {
    height: '20em',
    width: '20em',
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justifyContent="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="body1"
                pragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2019, we???re ready to get our hands on the world???s
                business problems.
              </Typography>
              <Typography variant="body1" paragraph>
                It all started with one question: Why aren???t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant="body1" paragraph>
                All this change can be a lot to keep up with, and that???s where
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: '20em' }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" paragraph>
            Andr?? Le??o, Founder
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            I started coding after my civil engineering graduation.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container>
          <Grid item container direction="column" lg>
            <Grid item>
              <img src={yearbook} alt="yearbook page" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg style={{ maxWidth: '45em', padding: '1.5em' }}>
            <Typography variant="body1" align="center" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning ???
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Now I???m ready to apply everything I???ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems="flex-end">
            <Grid item>
              <img src={puppy} alt="puppy" />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;

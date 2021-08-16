import React from 'react';
import 'fontsource-roboto';

import {AppBar, Container, Toolbar, IconButton, Typography, Box, Button, Paper, Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  }
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position={'fixed'}>
        <Container fixed>
          <Toolbar>
            <IconButton
              edge={'start'}
              color={'inherit'}
              aria-label={'menu'}
              className={classes.menuButton}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              variant={'h6'}
              className={classes.title}
            >
              Developer Blog
            </Typography>
            <Box mr={3}>
              <Button color={'inherit'} variant={'outlined'}>Log In</Button>
            </Box>
            <Button color={'secondary'} variant={'contained'}>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeaturePost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <Grid container>
              <Grid item md={6}>

              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>
  );
}

export default App;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Menu from '../containers/menu';
import Cart from '../containers/cart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const HomeLayout = (props) => {
    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <h1>Menu</h1>
                        <Menu pizzas={props.data}></Menu>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Cart></Cart>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeLayout
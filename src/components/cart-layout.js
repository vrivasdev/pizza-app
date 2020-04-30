import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Item from './item';
import { Button } from '@material-ui/core';
import Delivery from './delivery';

const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 700,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

const CartLayout = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return(
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Cart
          </Typography>
          <div className={classes.demo}>
            <List>
              {  
                props.cart.result.map(item => {
                    return (
                      <Item key={item.id} item={item}></Item>
                    )
                })
              }
            </List>
          </div>
          <ListItemText 
                align="left"
                primary={`Delivery (USD): ${props.cart.delivery} $`} 
          />
          <ListItemText 
                align="left"
                primary={`Total (USD): ${props.cart.total} $`} 
          />
          <ListItemText 
                align="left"
                primary={`Total (EUR): ${props.cart.euros} ‎€`} 
          />
          {
            (props.cart.total > props.cart.delivery) && 
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
              Confirm
            </Button>
          }
          <Delivery open={open} handleClick={handleClose} cart={props.cart}/>
        </Grid>
    );
}

export default CartLayout;

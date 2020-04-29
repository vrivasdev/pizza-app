import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import ItemAmount from '../containers/item-amount';
import DeleteButton from '../containers/delete-button';
import {ListItemSecondaryAction } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    table: {
      minWidth: 700,
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    margin: {
        marginLeft: theme.spacing(5),
    },
    smallWidth: {
        width: theme.spacing(0)
    }
}));

const Item = (props) => {
    const classes = useStyles();

    return(
        <ListItem key={props.item.id}>
            <ListItemAvatar>
                <Avatar
                    className={classes.small}
                    alt={`Avatar n°${props.item.id}`}
                    src={`./images/${props.item.id}.jpeg`}
                />
            </ListItemAvatar>
            <ListItemText align="center"
                primary={`${props.item.name} (${props.item.amount})`}
            />
            <ListItemText align="left"
                primary={`${props.item.price} $`} 
            />
            <ItemAmount id={props.item.id} />
            <ListItemSecondaryAction className={classes.smallWidth}>
                <DeleteButton id={props.item.id}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Item;
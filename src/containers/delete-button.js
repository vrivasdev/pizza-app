import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { remove } from '../actions/menuActions';

const classes = makeStyles((theme)=>({
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

class DeleteButton extends Component {
    render(){
        return(
            <IconButton 
                aria-label="delete" 
                edge="end" 
                className={classes.small}
                onClick = {() => this.props.remove(this.props.id)}
                >
                <DeleteIcon />
            </IconButton>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (item) => {
            dispatch(remove(item));
        }
    };
};
  
export default connect(null, mapDispatchToProps)(DeleteButton);
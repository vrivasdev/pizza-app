import React, { Component } from "react";
import { connect } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { increment, decrement } from '../actions/menuActions';

class ItemAmount extends Component {
    render() {
        return(
            <ListItemSecondaryAction>
                <IconButton edge="end" 
                        aria-label="more"
                        onClick={() => this.props.decrement(this.props.id)}>
                <ChevronLeftIcon />
                </IconButton>
                <IconButton edge="end" aria-label="less" 
                            onClick={() => this.props.increment(this.props.id)}>
                    <ChevronRightIcon />
                </IconButton>
            </ListItemSecondaryAction>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (number) => {
            dispatch(increment(number));
        },
        decrement: (number) => {
            dispatch(decrement(number));
        }
    }; 
};
  
export default connect(null, mapDispatchToProps)(ItemAmount);
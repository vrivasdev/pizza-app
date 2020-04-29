import React, { Component } from 'react';
import {connect} from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import { addPizza } from '../actions/menuActions';

class AddButton extends Component {
    render() {
        return(
            <IconButton 
                  edge="end" 
                  aria-label="add"
                  onClick={() => this.props.addPizza({'id':this.props.id,
                                                      'name': this.props.name,
                                                      'price': this.props.price,
                                                      'amount': 1})}>
                    <AddCircle></AddCircle>
            </IconButton>
        )
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        addPizza: (pizza) => {
            dispatch(addPizza(pizza));
        }
    };
};
  
export default connect(null, mapDispatchToProps)(AddButton);
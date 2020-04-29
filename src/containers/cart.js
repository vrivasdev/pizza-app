import React, {Component} from 'react'
import CartLayout from '../components/cart-layout'
import {connect} from "react-redux";

class Cart extends Component {
    render() {
        return(
            <CartLayout cart={this.props.menu}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    };
};

export default connect(mapStateToProps, null)(Cart);
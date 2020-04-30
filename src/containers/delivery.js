import React, { Component } from 'react';
import { Button, TextareaAutosize} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CartService from '../services/cartService';

class Delivery extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.service = new CartService();
    }

    submitForm = (cart) => {
        this.service.saveOrder({cart: cart, 
                                delivery: this.state})
                    .then(data => console.log(data));
        location.reload();
    }

    handleInputChange = (event) => { 
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    render(){
        return(
            <Dialog open={this.props.open}  aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Delivery</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please provide us your address
                    </DialogContentText>
                    <TextField
                        autoFocus
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={this.handleInputChange}
                        name="name"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        onChange={this.handleInputChange}
                        name="email"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone Number"
                        type="text"
                        onChange={this.handleInputChange}
                        name="phone"
                        fullWidth
                    />
                    <TextareaAutosize
                        rowsMax={4}
                        name="address"
                        id="address"
                        onChange={this.handleInputChange}
                        name="address"
                        aria-label="maximum height"
                        placeholder="Address"
                    />
                </DialogContent>
                <DialogActions>
                <Button color="primary" onClick={this.props.handleClick}>
                    Cancel
                </Button>
                <Button onClick={() => this.submitForm(this.props.cart)} color="primary" >
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default Delivery;
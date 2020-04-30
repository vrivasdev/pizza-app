import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import CartService from '../services/cartService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.service = new CartService();
    }
    componentDidMount () {
        this.service.getPizzas();
    }
    render() {
        return(
            <HomeLayout data={this.props.data}/>
        )
    }
}

export default Home;
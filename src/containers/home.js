import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import CartService from '../services/cartService';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.service = new CartService();
    }
    componentDidMount () {
        this.service.getPizzas().then((data) => {
            this.setState({
                data: data.data.data
            });
        });
    }
    render() {
        return(
            <HomeLayout data={this.state.data}/>
        )
    }
}

export default Home;
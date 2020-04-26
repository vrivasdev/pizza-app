import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Pizzas from '../../pizzas/components/pizzas'
import PizzasButtons from '../../pizzas/components/pizzas-buttons'

class Home extends Component {
    render() {
        return(
            <HomeLayout>
                <PizzasButtons />
                <h1>Menu</h1>
                
                <Pizzas pizzas={this.props.data.pizzas}></Pizzas>
            </HomeLayout>
        )
    }
}

export default Home
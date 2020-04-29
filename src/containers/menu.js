import React, {Component} from 'react'
import MenuLayout from '../components/menu-layout'

class Menu extends Component {
    render() {
        return(
            <MenuLayout addPizza={() => this.props.addPizza()} 
                        pizzas={this.props.pizzas}
            />
        )
    }
}
  
export default Menu;

class CartService {
    getPizzas() {
        return new Promise((resolve, reject) => {
            fetch('https://pizza-api-laravel.herokuapp.com/menu',
                  {method: 'GET'})
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        });
    }
    saveOrder({cart, delivery}) {
        return new Promise((resolve, reject) => {
            fetch('https://pizza-api-laravel.herokuapp.com/order',
                  {method: 'POST',
                   mode: 'no-cors',
                   body: JSON.stringify({
                       'name': delivery.name,
                       'address': delivery.address,
                       'email': delivery.email,
                       'total_eur': cart.euros,
                       'total_usd': cart.total,
                       'phone': delivery.phone
                   })})
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        });
    }
}

export default CartService;
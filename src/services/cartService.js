
class CartService {
    getPizzas() {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8000/menu',
                  {method: 'GET'})
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error))
        });
    }
    saveOrder({cart, delivery}) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8000/order',
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
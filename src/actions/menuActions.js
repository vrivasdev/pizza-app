export function addPizza(pizza) {
    return {
        type: "ADD",
        payload: pizza
    };
}

export function increment(item) {
    return {
        type: "INCREMENT",
        payload: item
    };
}

export function decrement(item) {
    return {
        type: "DECREMENT",
        payload: item
    };
}
export function remove(item) {
    return {
        type: "REMOVE",
        payload: item
    };
}
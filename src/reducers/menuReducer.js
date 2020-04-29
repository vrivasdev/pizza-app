const menuReducer = (state = {
    result: [],
    total: 5,
    euros: 0,
    delivery: 5
}, action) => {
    switch (action.type) {
        case "ADD":
            let res = [];
            let total = state.total;

            if (!state.result.some(item => item.id === action.payload.id)) {
                res = [...state.result, action.payload];
                total = state.total + action.payload.price;
            } else {
                res = [...state.result]
            }
            state = {
                ...state,
                result: res,
                total: total,
                euros: (total * 0.92).toFixed(2)
            };
        break;
        case "INCREMENT":
            state.result.map(row => {
                if (row.id === action.payload && row.amount >= 1){

                    const individual = (row.price / row.amount);

                    state.total += individual;
                    state.euros = (state.total * 0.92).toFixed(2);
                    row.price = row.price + individual;

                    return [...row, row.amount++, row.price ];
                } else {
                    return [...row];
                }
            });
            
            state = {...state, }
        break;
        case "DECREMENT":
            state.result.map(row => {
                if (row.id === action.payload && row.amount>1){
                    const individual = (row.price / row.amount);
                    
                    state.total -= individual;
                    state.euros = (state.total * 0.92).toFixed(2);
                    row.price = row.price - individual;
                    
                    return [...row, row.amount--, row.price];
                } else {
                    return [...row]
                }         
            });
            state = {...state}
        break;
        case "REMOVE":
            const selected = state.result.filter(row => row.id === action.payload)[0];
            const newState = {'result': state.result.filter(row => row.id !== action.payload),
                              'total': state.total - selected.price,
                              'euros': ((state.total - selected.price) * 0.92).toFixed(2),
                              'delivery': state.delivery };
            state  = {...newState};
        break;
    }
    return state;
};

export default menuReducer;
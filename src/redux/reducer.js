const initialState = {
    counter:0,
    nav:"NAVIGATION BAR"
}


const reducerFunc = (state = initialState, action) => {
    switch(action.type){
        case 'DECREMENT':
            return{...state, counter:state.counter - 1};
        case 'INCREMENT':
            return{...state, counter:state.counter + 1};
        default:
            return state;        
    }
}


export default reducerFunc;

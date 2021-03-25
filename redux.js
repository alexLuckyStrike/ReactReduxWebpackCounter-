const redux = require('redux');


let initialStore = {
    counter:0
}


let reducer = function(state = initialStore,action){
    if(action.type === 'ADD'){
        return{
            counter:state.counter + 1
        }
    }
       else if(action.type === 'SUB'){
           return{
               counter:state.counter + action.value
           }
    }
       else if(action.type === 'ADD__SOMETHING'){
           return{
               counter:state.counter + action.value
           }
    }
    return  state
}


let store = redux.createStore(reducer);
console.log(store.getState());

let addCounter  = {
    type:'ADD'
}


store.dispatch(addCounter);
console.log(store.getState());


store.dispatch({type:'SUB',value:10});
console.log(store.getState());

store.dispatch({type:'ADD__SOMETHING',value:15});
console.log(store.getState());
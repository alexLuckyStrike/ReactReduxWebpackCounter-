

let initialState = {

    counter:10000

}

function rootReducer(state = initialState,action){

    switch(action.type){

        case 'SUB': return {

            counter: state.counter + action.value
        }

        case 'ADD':return {

            counter:state.counter + action.value
        }

    }

    return state
}

export default rootReducer;
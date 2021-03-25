import React from 'react'
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import css from './App.css'
import rootReducer from "./redux/rootReducer";
import {connect} from 'react-redux';
import Container from "./Container";


class App extends React.Component{

    state = {
        counter:0
    }

    addCounter = (value) => {
        this.setState({
            counter: this.state.counter + value
        })
    }

    render(){
        console.log(this.props)
        return(
            <div className='App'>
                <h1>Счетчик: <span>{this.props.counter}</span></h1>
                <div className='AppBox'>
                    <button onClick={() => this.props.onAdd(10)}>ADD</button>
                    <button onClick={() => this.props.onSub(-20)}>SUB</button>
                </div>
                {/*<Container/>*/}
                {/*<Container/>*/}
                {/*<Container/>*/}
                {/*<Container/>*/}
            </div>
        )
    }
}

 function mapStateToProps(state){
    return {
        counter: state.counter
    }
 }

function mapDispatchToProps(dispatch){
    return{
        onAdd:number => dispatch({type:'ADD',value:number}),
        onSub:number => dispatch({type:'SUB',value:number})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
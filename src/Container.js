import React from 'react';
import ReactDOM from 'react-dom';
import css from './Container.css';
import {connect} from 'react-redux';

    class Container extends React.Component{
    render() {
        console.log(this.props)
        return(
            <div className='Container'>
            {/*<h1>{this.props.counter}</h1>*/}

            <div>
                <button onClick = {this.props.onAdd}>ADD</button>
                <button onClick = {this.props.onSub}>SUB</button>
            </div>

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
            onSub:() => dispatch({type:'SUB'}),
            onAdd:() => dispatch({type:'ADD'})
        }
}


export default connect(mapStateToProps,mapDispatchToProps)(Container);
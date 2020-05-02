import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {action_changeName, action_addWish} from './actions/actions';

function App(props) {
  console.log("props",props);
  const wishes = props.wishes.map(item =>{
  return <p>{item}</p>
  })
  return (
    <div className="App">
      <h1>name: {props.name}</h1>
      {wishes}
      <button onClick={() => {props.changeName()}}>Change name</button>
      <button onClick={() => {props.addWish()}}>Add Wish</button>
    </div>
  );
}
const mapStateProps = (state) =>{
  return {
    name: state.name,
    wishes: state.wish
  }
}

const mapDispatchProps = (dispatch) => {  
  return {
    //changeName: (name)=>{dispatch(action_changeName(name)) }
    changeName: ()=>{dispatch(action_changeName()) },
    addWish: () =>{ dispatch(action_addWish())}
  }

}

export default connect(mapStateProps, mapDispatchProps)(App);

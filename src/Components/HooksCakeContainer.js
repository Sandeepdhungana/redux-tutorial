import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from "../redux";

function HooksCakeContainer() {
    const numberOfCakes= useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cakes</button>
    </div>
  );
}

export default HooksCakeContainer;

// useSelector-> to get hold of any state maintened in redux store we use
// useSelector hook. It acts close equal to mapStateToProps.


// useDispatch -> used to dispatch an action to reducer

// it returns the reference to dispatch funtion from the redux store
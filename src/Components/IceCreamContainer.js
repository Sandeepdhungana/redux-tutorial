import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'
// import {buyIceCream} from '../redux/iceCream/iceCreamActions'

function iceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecream: {props.numberOfIceCream}</h2>
            <button onClick = {props.buyIceCream}>Buy IceCream</button>
        </div>
    )
} 

const mapStateToProps = state => {
    return {
        numberOfIceCream: state.iceCream.numberOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)

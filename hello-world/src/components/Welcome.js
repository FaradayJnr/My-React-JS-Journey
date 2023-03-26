import React, { Component } from 'react'

//state lass component
//destructing props in the body
class Welcome extends Component{
    render(){
        const {name} = this.props
        // const {state, state1} = this.state
        return(
        <h1>
            You warmly are welcome {name}
        </h1>
        )
    }
}
export default Welcome
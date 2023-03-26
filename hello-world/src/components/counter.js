//import React and component from react-dom
import React, { Component } from 'react'

    /*Do's and Don'ts
    ###Never modify a state directly
    ###Whenever you want to execute a code after setState method,
    do not place it right after the setState method instead, place it in the callback function with an arrow function
    ### Update a state based on a previous state by passing a function as an argument
    */
//class component
class Counter extends Component{
    // (rconst -snippet) => ES7 React... extension installed
    constructor(props) {
    // call prop function
      super(props)
        
      //object
      this.state = {
         count: 5
      }
    }
    //increment method
     /*Search the current value of count
    increment it by 1 and
    assign the new value to it */

    increment (){
        // //this.state.count = this.state.count + 1 (Direct increment of state count)
        //  //incrementing the state count by 1

        //  //calls to setState() are asynchronous
        // this.setState({
        //     count: this.state.count + 1

        //     //callback function (arrow func)
        // }, () => {console.log('Callback value',this.state.count)})
        this.setState(prevState => ({
            count: prevState.count + 1
        }))

        
        //console.log is called before the state is set
        console.log(this.state.count) //log the console value
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render(){
        return(
            //setting the counter state (onClick function) and call in the increment method
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button> 
            </div>
        )
    }
}
//export Counter component as default to the app component
export default Counter
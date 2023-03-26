//creating functional component: react-snippet {rfce}
//ctrl + D: refactoring
import React from 'react'

function FuncClick() {
    //nested function
    function clickHandler(){
            console.log('button clicked')   
    }
     return (
    <div className='click'>
        <button onClick= {clickHandler}>Click</button>
    </div>
    )
}

export default FuncClick

import React from 'react'

// function Greet(){
//     return <h1>Hello Emma</h1>
// }

//jsx format = functional component
//prop - to pass argument to functions
const Greet = props => {
//log the console value (prop)
console.log(props)
return (
<div>
    <h1>
        Hello {props.name}
    </h1>
    {props.children}
</div>
)
}

export default Greet

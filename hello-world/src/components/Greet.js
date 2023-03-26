import React from 'react'

// function Greet(){
//     return <h1>Hello Emma</h1>
// }

//jsx format = functional component
//prop - to pass argument to functions

// const Greet = props => {
// //log the console value (prop)
// console.log(props)
// return (
// <div>
//     <h1>
//         Hello {props.name}
//     </h1>
//     {props.children}
// </div>
// )
// }


//destructuring props in the parameter
// const Greet = ({name,children}) => {
//     return (
//     <div>
//         <h1>
//             Hello {name}
//         </h1>
//         {children}
//     </div>
//     )
//     }

//destructuring props in the body
const Greet = props => {
    const {name,children} = props
    return (
    <div>
        <h1>
            Hello {name}
        </h1>
        {children}
    </div>
    )
    }

export default Greet

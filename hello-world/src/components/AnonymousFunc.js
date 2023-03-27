import React from 'react'
let age = 10
//anonymous function
// function AnonymousFunc() {
//   return (
//     <div className="anonymous">
//       <button onClick={() => {console.log('I am anonymous');}}>Tap on it</button>
//     </div>
//   )
// }

//conditional (if...else) --> Tenary operators
const AnonymousFunc = () =>{
    return age > 10 ? <div>Hello</div>: <div>Hi</div>
} 
export default AnonymousFunc

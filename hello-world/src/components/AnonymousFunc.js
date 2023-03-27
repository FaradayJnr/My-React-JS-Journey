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
let names = ["Naa","Okine","Eno"]
//conditional (if...else) --> Tenary operators


const AnonymousFunc = () =>{
    //.map()
    // names.map((name)=>{
    //     return <h1>{name}</h1>
    // })
    return (
        age > 10 ? <div>Hello</div>: <div>Hi</div>

    )

} 
export default AnonymousFunc

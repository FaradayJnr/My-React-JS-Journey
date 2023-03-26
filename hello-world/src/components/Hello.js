import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //     <h1>Hello World!</h1>
    //     </div>
    // )

    //assign attributes(id,class)
    return React.createElement(
        'div', {id: 'text',className: 'dummyClass'}, 
        React.createElement('h1', null, 'Hello World!'))
}
export default Hello
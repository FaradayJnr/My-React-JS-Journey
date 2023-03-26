import React from 'react'

//anonymous function
function AnonymousFunc() {
  return (
    <div>
      <button onClick={() => {console.log('I am anonymous');}}>Tap on it</button>
    </div>
  )
}

export default AnonymousFunc

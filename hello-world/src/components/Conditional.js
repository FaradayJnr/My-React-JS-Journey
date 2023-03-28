import React from 'react'
import AddImage from './AddImage';
import FuncClick from './FuncClick';
import Hello from './Hello';

function Conditional() {
    let content;
    if (Hello) {
      content = <FuncClick />;
    } else {
      content = <AddImage />;
    }
    return (
      <div>
        {content}
      </div>
    );
}

export default Conditional

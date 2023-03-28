import React from 'react'
import AddImage from './AddImage';
import FuncClick from './FuncClick';
import Hello from './Hello';
import ClassClick from './ClassClick';

function Conditional() {
    let content;
    if (Hello) {
      content = <AddImage />;
    } else {
      content = <ClassClick />;
    }

    return (
      <div>
        {content}
      </div>
    );
}

export default Conditional

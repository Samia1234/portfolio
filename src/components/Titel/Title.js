import React from 'react';
import '../../App.css'
function Title(props) {
    return (
        <div className="title">
          <h1>{props.title} </h1>
        </div>
    );
}

export default Title;
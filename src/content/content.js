import React from 'react';
import './content.css';

const Content = ({bc}) => {

    let name = 'initial';

    function clickButtonHandler(value) {
        bc(name);
        console.log("Clocked!" + value)
    };

    const inputHandler = (e) => {
        name = e.target.value;
        console.log(name)
    };

    return(
        <div className='my-content-sytle'>
                <input text="text" onChange={inputHandler}/>
                <button onClick={() => clickButtonHandler(1)}>Add me</button>
                <button onClick={() => clickButtonHandler(2)}>Add me</button>
            Content
        </div>
    );
};

export default Content;
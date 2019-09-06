import React from 'react';
import './Main.css'
import Box from '../Box/Box';


const clickHandler = () => {
    console.log('Hello people!');
}
/*function Main() {
    return (
        <div className="main">
            <p>Main</p>
            <img src="https://media.giphy.com/media/3o7WIGxV0xs5TRNo64/giphy.gif" alt="demon gif" className="demon"></img>
            <button type="button" onClick={clickHandler}>Click me!</button>
        </div>
    );
}*/

const Main = () => {
    return (
        <div className="main">
            <p>Main</p>
            <img src="https://media.giphy.com/media/3o7WIGxV0xs5TRNo64/giphy.gif" alt="demon gif" className="demon"></img>
            <button type="button" onClick={clickHandler}>Click me!</button>
            <div>
                <Box name="Heidi" age="23" title="Student" />
                <Box name="Ronja" age="26" title="Student" />
                <Box name="Joppe" agw="19" title="Student" />
            </div>
        </div>
    );
}

export default Main;
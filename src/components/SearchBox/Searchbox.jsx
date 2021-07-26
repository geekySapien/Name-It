import React from 'react';
import './Searchbox.css';
const Searchbox = ({ onInputChange }) => {
    return (
        <div className="Search-container">
            <input onChange={(event) => onInputChange(event.target.value)} placeholder=" Search Keywords" className="Search-inputs"></input>
        </div>
    )
}
export default Searchbox;
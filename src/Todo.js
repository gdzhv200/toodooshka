// Import 'react' library
import React from 'react';
// ???
export const Todo = ({ onDoneChanged, onDeleteClick, model }) => {
    // ???
    const { text, done } = model;
    return (
        <label style={{ display: 'block' }} >
            <input
                type="checkbox"
                checked={done}
                onChange={event => onDoneChanged(event.target.checked)}
            />
            {done && <s>{text}</s>}
            {!done && text}
            <button onClick={onDeleteClick}>x</button>
        </label>
    );
};
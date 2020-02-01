// Import 'react' library
import React from 'react';
// Import 'Todo' component
import { Todo } from './Todo';
// ???
export const TodoList = ({ onDoneChanged, onDelete, todos }) => (
    <div>
        {todos.map(todoModel => (
            <Todo
                key={todoModel.id}
                model={todoModel}
                onDeleteClick={() => onDelete(todoModel)}
                onDoneChanged={done => onDoneChanged(todoModel, done)}
            />
        ))}
    </div>
);
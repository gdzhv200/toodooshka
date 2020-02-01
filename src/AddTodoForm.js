// Import 'react' library
import React from 'react';
// ???
export class AddTodoForm extends React.Component {
    // ???
    state = {
        inputValue: ''
    };
    // ???
    handleInputChange = event => {
        this.setState({ inputValue: event.target.value });
    };
    // ???
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.inputValue.length > 0) {
            this.props.onSubmit(this.state.inputValue);
            this.setState({ inputValue: '' });
        };
    };
    // ???
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button type="submit">Add</button>
            </form>
        );
    };
};
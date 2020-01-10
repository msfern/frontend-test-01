import React from 'react';

class AddWidget extends React.Component {
    render() {
        return (
            <button onClick={this.props.addNewWidget}>Add Widget</button>
        )
    }
}

export default AddWidget;
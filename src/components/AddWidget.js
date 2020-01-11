import React from 'react';

class AddWidget extends React.Component {
    render() {
        return (
            <button onClick={this.props.addNewWidget} className="ui circular icon button add-widget-btn"><i aria-hidden="true" className="plus icon"></i></button>
        )
    }
}

export default AddWidget;
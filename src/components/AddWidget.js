import React from 'react';
import { Button } from 'semantic-ui-react'

class AddWidget extends React.Component {
    render() {
        return (
            <Button onClick={this.props.addNewWidget} className="add-widget-btn" circular icon='plus' />
        )
    }
}

export default AddWidget;
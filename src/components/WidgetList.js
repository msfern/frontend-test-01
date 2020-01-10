import React from 'react';
import Widget from './Widget';

class WidgetList extends React.Component {
    render() {
        return (
            <ul>
                {Object.keys(this.props.widgetList).map( key =>
                    <Widget key={key} index={key} name={this.props.widgetList[key].name} details={this.props.widgetList[key]} deleteWidget={this.props.deleteWidget} editWidget={this.props.editWidget} />    
                )}
            </ul>
        )
    }
}

export default WidgetList;
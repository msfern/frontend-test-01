import React from 'react';
import Widget from './Widget';

class WidgetList extends React.Component {
    render() {
        const filteredWidgets = Object.keys(this.props.widgetList).filter( widget => this.props.widgetList[widget].name.indexOf(this.props.searchValue) !== -1);
        return (
            <ul>
                {filteredWidgets.map( key =>
                    <Widget key={key} index={key} name={this.props.widgetList[key].name} details={this.props.widgetList[key]} deleteWidget={this.props.deleteWidget} editWidget={this.props.editWidget} />    
                )}
            </ul>
        )
    }
}

export default WidgetList;
import React from 'react';
import Widget from './Widget';

class WidgetList extends React.Component {
    render() {
        
        const filteredWidgets = Object.keys(this.props.widgetList).filter( widget => this.props.widgetList[widget].title.text.toLowerCase().indexOf(this.props.searchValue.toLowerCase()) !== -1);

        return (
            <ul className='widget-list'>
                {filteredWidgets.map( key =>
                    <Widget key={key} index={key} details={this.props.widgetList[key]} deleteWidget={this.props.deleteWidget} openModalEdit={this.props.openModalEdit} />    
                )}
            </ul>
        )
    }
}

export default WidgetList;
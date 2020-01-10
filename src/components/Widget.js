import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class Widget extends React.Component {
    handleDeleteClick = () => {
        this.props.deleteWidget(this.props.index);
    }
    handleEditClick = () => {
        alert('change');
    }
    render() {
        return (
            <li className='widget' >
                <header>
                    <h3>{this.props.name}</h3>
                    <button onClick={this.handleDeleteClick}>Delete Widget</button>
                    <button onClick={this.handleEditClick}>Edit Widget</button>
                </header>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.props.details}
                />
            </li>
        )
    }
}

export default Widget;
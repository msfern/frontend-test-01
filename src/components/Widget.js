import React from 'react';
import { Dropdown } from 'semantic-ui-react'
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
                <header className='widget-header'>
                    <h3 className='widget-title'>{this.props.name}</h3>
                    <Dropdown icon='ellipsis vertical'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Editar' onClick={this.handleEditClick} />
                            <Dropdown.Item text='Excluir' onClick={this.handleDeleteClick} />
                        </Dropdown.Menu>
                    </Dropdown>
                </header>
                <HighchartsReact
                    className='highcharts-container'
                    highcharts={Highcharts}
                    options={this.props.details}
                />
            </li>
        )
    }
}

export default Widget;
import React from 'react';
import { Dropdown, Confirm } from 'semantic-ui-react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class Widget extends React.Component {
    state = { open: false }
    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    handleDeleteClick = () => {
        this.props.deleteWidget(this.props.index);
    }
    handleEditClick = () => {
        this.props.openModalEdit(this);
    }
    render() {
        const name = this.props.details.title.text;
        return (
            <li className='widget' >
                <header className='widget-header'>
                    <h3 className='widget-title'>{name}</h3>
                    <Dropdown icon='ellipsis vertical'>
                        <Dropdown.Menu>
                            <Dropdown.Item text='Editar' onClick={this.handleEditClick} />
                            <Dropdown.Item text='Excluir' onClick={this.open} />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Confirm
                        open={this.state.open}
                        onCancel={this.close}
                        onConfirm={this.handleDeleteClick}
                        content='Tem certeza?'
                        cancelButton='Cancelar'
                    />
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
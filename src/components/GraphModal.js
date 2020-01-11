import React from 'react';
import { Button, Image, Modal, Form } from 'semantic-ui-react'

class GraphModal extends React.Component {
  nameRef = React.createRef();
  valueRef = React.createRef();

  handleFormSubmit = (event) => {
    event.preventDefault();
    const widget = {
      title:{
        text: this.nameRef.current.value
      },
      series: [{
          data: this.valueRef.current.value.split(' ').map(number => parseInt(number)).filter(number => !Number.isNaN(number))
      }]
    }
    this.props.updateWidget(widget);
  }

  render() {
    const widgetBeingEdited = this.props.widgetBeingEdited.details;
    const isBeingEdited = this.props.isBeingEdited;
    return (
        <Modal open={this.props.isModalOpen} onClose={this.props.closeModal}>
          <Modal.Header>Criar Widget</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src='images/chart.jpg'
              alt='Gráfico'
              className='graph-image'
              />
            <Modal.Description>
            <Form id="widget-form" onSubmit={this.handleFormSubmit}>
              <Form.Field>
                <label>Nome do Widget</label>
                <input placeholder='Nome do Widget' ref={this.nameRef} required defaultValue={isBeingEdited ? widgetBeingEdited.title.text : ''} />
              </Form.Field>
              <Form.Field>
                <label>Valores de Y (separados por espaço)</label>
                <input placeholder='Valores' ref={this.valueRef} required defaultValue={isBeingEdited ? widgetBeingEdited.series[0].data.join(' ') : ''} />
              </Form.Field>
            </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.props.closeModal}>
              Cancelar
            </Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content={isBeingEdited ? 'Atualizar' : 'Criar'}
              type="submit"
              form="widget-form"
            />
          </Modal.Actions>

        </Modal>
    )
  }
}

export default GraphModal;
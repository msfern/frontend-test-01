import React from 'react';
import WidgetList from './WidgetList';
import Header from './Header';
import AddWidget from './AddWidget';
import GraphModal from './GraphModal';
import Footer from './Footer';

class App extends React.Component {
  state = {
    widgets: {},
    search: '',
    isModalOpen: false,
    isBeingEdited : false,
    widgetBeingEdited: {}
  }
  
  openModalEdit = (widget) => {
    this.setState({widgetBeingEdited: widget.props});
    this.setState({isModalOpen: true});
    this.setState({isBeingEdited: true});
  }
  
  openModalAdd = () => {
    this.setState({isModalOpen: true});
  }

  closeModal = () => {
    this.setState({isBeingEdited: false});
    this.setState({isModalOpen: false});
  }

  updateWidget = widget => {
    const widgets = {...this.state.widgets};
    const widgetBeingEdited = this.state.widgetBeingEdited;
    if (this.state.isBeingEdited) {
      widgets[widgetBeingEdited.index] = widget;
    } else {
      widgets[`widget${Date.now()}`] = widget;
    }
    this.setState({widgets});
    this.setState({widgetBeingEdited: {}});
    this.closeModal();
  }

  deleteWidget = key => {
    const widgets = {...this.state.widgets};
    delete widgets[key];
    this.setState({widgets});
  }

  updateSearch = text => {
    this.setState({search: text});
  }

  render() {
    return (
      <div className="App">
        <Header updateSearch={this.updateSearch} />
        <WidgetList widgetList={this.state.widgets} deleteWidget={this.deleteWidget} openModalEdit={this.openModalEdit} searchValue={this.state.search} />
        <AddWidget openModalAdd={this.openModalAdd} />
        <Footer />
        <GraphModal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} updateWidget={this.updateWidget} widgetBeingEdited={this.state.widgetBeingEdited} isBeingEdited={this.state.isBeingEdited} />
      </div>
    );
  }
}

export default App;

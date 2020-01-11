import React from 'react';
import WidgetList from './WidgetList';
import Header from './Header';
import AddWidget from './AddWidget';
import Footer from './Footer';
import sampleCharts from '../sample-charts';

class App extends React.Component {
  state = {
    widgets: {},
    search: ''
  }

  addNewWidget= () => {
    // const widgets = {...this.state.widgets};
    // widgets[`widget${Date.now()}`] = sampleCharts.chart1;
    // this.setState({widgets});
    this.setState({widgets: sampleCharts})
  }

  editWidget = key => {
    
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
        <WidgetList widgetList={this.state.widgets} editWidget={this.editWidget} deleteWidget={this.deleteWidget} searchValue={this.state.search} />
        <AddWidget addNewWidget={this.addNewWidget} />
        <Footer />
      </div>
    );
  }
}

export default App;

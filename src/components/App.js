import React from 'react';
import WidgetList from './WidgetList';
import Header from './Header';
import AddWidget from './AddWidget';
import sampleCharts from '../sample-charts';

class App extends React.Component {
  state = {
    widgets: {}
  }

  addNewWidget= () => {
    const widgets = {...this.state.widgets};
    widgets[`widget${Date.now()}`] = sampleCharts.chart1;
    this.setState({widgets});
  }

  editWidgetTitle = key => {
    
  }

  deleteWidget = key => {
    const widgets = {...this.state.widgets};
    delete widgets[key];
    this.setState({widgets});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <WidgetList widgetList={this.state.widgets} editWidgetTitle={this.editWidgetTitle} deleteWidget={this.deleteWidget} />
        <AddWidget addNewWidget={this.addNewWidget} />
      </div>
    );
  }
}

export default App;

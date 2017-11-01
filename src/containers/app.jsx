import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Form from '../components/form';

const style = {
  textAlign: 'center'
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={style}>
          <h4>Calculadora de Capitalização</h4>
          <Form />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

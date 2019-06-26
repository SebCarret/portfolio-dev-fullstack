import React, {Component} from 'react';
import './App.css';

// Components import
import Navbar from './components/Navbar';
import Content from './components/Content';
import Particles from './components/Particles';

// Redux import
import menuClick from './reducer/menu.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({menuClick}));

class App extends Component {

  render(){

    return (
      <Provider store={store}>
        <div className="App">
          <Particles/>
          <Navbar/>
          <Content/>
        </div>
      </Provider>
    );
  }
}

export default App;

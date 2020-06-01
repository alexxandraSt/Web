import React from 'react';
import {Images} from './components/images'
import './App.css';

class App extends React.Component
{
  constructor()
  {
    super()
    this.state = { isLoading: true }
  }
  componentDidMount(){
    this.setState({isLoading: false})
  }
  render(){
  return (
    this.state.isLoading ? <div class="loader"></div> :  <div className="App">
      <Images />
    </div>
  );
}
}

export default App;

import {Component} from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component{
  state={
    products: [
      {name: 'Tomate', price: 1500, img: '/Assets/'}
    ]
  }
  render(){
    return(
      <div>
        <p>HOLA</p>
      </div>
    )
  }
}

export default App;
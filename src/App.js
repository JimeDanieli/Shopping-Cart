import {Component} from 'react';
import Products from './Components/Products'

class App extends Component{
  state ={
    products: [
      {name: 'Tomate', price: 1500, img:'/Assets/tomate.jpg' },
      {name: 'Lettuce', price: 2500, img:'/Assets/lechuga.jpg' },
      {name: 'Peas', price: 500, img:'/Assets/arvejas.jpg' }
    ]
  }
  render(){
    return(
      <div>
        <Products
          addToCart={() => console.log('It does not do anything')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App;
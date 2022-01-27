import {Component} from 'react';
import Products from './Components/Products';
import Layout from './Components/Layout';
import Title from './Components/Title';
import Navbar from './Components/Navbar'

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
        <Navbar/>
        <Layout >
         <Title/>
          <Products
            addToCart={() => console.log('It does not do anything')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
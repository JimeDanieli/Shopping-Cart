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
    ],
    cart:[],
    visibility: false,
  }
  addToCart =(product)=>{
    const {cart}= this.state
    if(cart.find(x=> x.name === product.name)){
      const newCart= cart.map(x => x.name === product.name? ({
        ...x,
        cuantity: x.cuantity + 1
      })
      : x)
       return this.setState({cart: newCart})
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        cuantity: 1,
      })
    })
  }

  showCart = () =>{
    if(!this.state.cart.length){
      return
    }
    this.setState({visibility: !this.state.visibility })
  }


  render(){
    const { visibility} = this.state
    return(
      <div>
        <Navbar cart={this.state.cart} 
                visibility={visibility} 
                showCart={this.showCart}/>
        <Layout >
         <Title/>
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
import { Component } from "react";
import Product from './Product'

const styles={
    products:{
        dispaly:'flex,',
        flexDirection:'row',
        justifyContent:'space-between'
    }
}
class Products extends Component {
    render(){
      const { products, addToCart} = this.props 
        return(
             <div style={styles.products}>
                 {products.map(product =>
                    <Product
                      addToCart={addToCart}
                      key ={product.name}
                      product={product}
                    />)}
             </div>
        )
    }
}

export default Products
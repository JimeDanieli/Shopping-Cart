import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import CartDetail from './CartDetail'

const styles={
    cart:{
        backgroundColor:'#359A2C',
        color:'#fff',
        border:'none',
        padding:'15px',
        borderRadious:'15px',
        cursor:'pointer'
    },
    bubble:{
        position:'relative',
        left:12,
        top:20
    }
}
class Cart extends Component{
    render(){
        const{cart, visibility, showCart} = this.props
        const cuantity =cart.reduce((acc,el)=> acc + el.cuantity, 0)
        return(
          <div>
              <span style={styles.bubble}>
                  {cuantity !==0
                    ?<BubbleAlert value ={cuantity}/>
                    :null}
              </span>
             <button onClick={showCart} style={styles.cart} >
                CART
            </button>
            {visibility? <CartDetail cart={cart}/> : null}
          </div>
        )
    }
}
export default Cart;
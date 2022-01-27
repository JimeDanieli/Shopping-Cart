import { Component } from "react";

const styles={
    button:{
        backgroundColor:'#0A283E',
        color:'#fff',
        padding:'15px 20px',
        border: 'none',
        borderRadious:'5px'
    }
}
class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/> //aca le paso el onclick del product
        )
    }
}
export default Button
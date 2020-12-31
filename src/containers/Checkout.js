import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {Helmet} from 'react-helmet'
import '../styles/components/Checkout.css'

const Checkout = () => {
  const {state, removeFromCart}=useContext(AppContext)
  const{cart}= state

  const handleRemove= product =>()=>{
    removeFromCart(product)
  }

  const handleSumTotal=()=>{
    const reducer = (accumulator, currentValue)=> accumulator+ currentValue.price
const sum = cart.reduce(reducer,0)
return sum

} 
 return (
   <>
   <Helmet>
        <title>Merch - Checkout</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@xander_coder" />
        <meta name="twitter:creator" content="@xander_coder" />
        <meta name="twitter:title" content="Platzi Conf Store" />
        <meta name="twitter:description" content="Merch Store" />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <meta property="og:title" content="Merch Store" />
        <meta property="og:description" content="Merch Store" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2fGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <meta property="og:url" content="https://merch-300216.web.app" />
        <meta property="og:site_name" content="Merch Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length>0 ? <h3>Lista de pedidos</h3> : <h3>sin pedidos...</h3>}
        {cart.map((item)=>(

        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
          <button type="button" onClick={handleRemove(item)}><i className="fas fa-trash-alt"/></button>
        </div>
        ))}
      </div>
      {cart.length > 0 && (

      <div className="Checkout-sidebar">
        <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
        <Link to='/checkout/information'>
        <button type="button" >Continuar pedido</button>
        </Link>
      </div>
      )}
    </div>
    </>
  );
};

export default Checkout;
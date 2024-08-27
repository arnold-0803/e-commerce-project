import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShoppingContext';

function CartItem({data}) {
  
  const {addToCart, removeFromCart, cartItems, deleteCartItem, updateCartItemCount} = useContext(ShopContext);
  const itemQuantity = cartItems[data.id]?.quantity || 0;

  const handlQuantityUpdate = (e) => {
    const newQuantity = Number(e.target.value, 10);
    if(newQuantity >= 0){
      updateCartItemCount(data.id, newQuantity)
    }
  }

  return (
    <div className='cart-item'>
      <div className="cart-left">
        <img src={data.src} alt="" />
      </div>
      
      <div className="cart-right">
        <p>Product: <b>{data.title}</b></p>
        <p>Quantity: <b>{itemQuantity}</b></p>
        <p>Price: <b>${data.price}</b></p>
        <div className="inc-dec">
          <button onClick={() => removeFromCart(data.id)}>-</button>
          <input value={itemQuantity} onChange={handlQuantityUpdate}/>
          <button onClick={() => addToCart(data.id)}>+</button>
        </div>
        <div className="delete-btn">
          <button onClick={() => deleteCartItem(data.id)}>
            <i className='fa-solid fa-trash'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem;
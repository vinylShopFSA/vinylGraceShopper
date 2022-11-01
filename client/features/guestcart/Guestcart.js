
import React, { useEffect } from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'

import {
    getGuestCart,
    addToGuestCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromGuestCart,
} from './guestCartSlice'


const GuestCart = () => {

  return (
<div>
    <div>guestcart</div>
        <div className="cart-page">
          <h1>My Cart</h1>
        </div>
    </div>

            
  )

        }

export default GuestCart























// const GuestCart = ({item}) => {
      
//   let [guestCart, setGuestCart] = useState([])
  
//   let cart = localStorage.getItem("cart");

//   const addItem = (item) => {
//     let cartCopy = [...cart];
//     let {ID} = item;
//     let existingItem = cartCopy.find(cartItem => cartItem.ID == ID);

//     if (existingItem) {
//         existingItem.quantity += item.quantity 
//     } else { 
//       cartCopy.push(item)
//     }
//     setGuestCart(cartCopy)
//     let stringCart = JSON.stringify(cartCopy);
//     localStorage.setItem("cart", stringCart)
//   }
  
//   const editItem = (itemID, amount) => {
//     let cartCopy = [...cart]
//         let existentItem = cartCopy.find(item => item.ID == itemID);
//         if (!existentItem) return
//         existentItem.quantity += amount;
//         if (existentItem.quantity <= 0) {
//       cartCopy = cartCopy.filter(item => item.ID != itemID)
//     }
//      setGuestCart(cartCopy);
//     let cartString = JSON.stringify(cartCopy);
//     localStorage.setItem('cart', cartString);
//   }

//   const removeItem = (itemID) => {
//     let cartCopy = [...cart]
    
//     cartCopy = cartCopy.filter(item => item.ID != itemID);
//     setGuestCart(cartCopy);
    
//     let cartString = JSON.stringify(cartCopy)
//     localStorage.setItem('cart', cartString)
//   }


//   useEffect(() => {
//     cart = JSON.parse(cart);
//     if (cart) setGuestCart(cart)
//   }, []) 

//   return (
//     <div>guestcart
//     {guestCart?.map((item)=> {
//         <div key = {item.id}>
//         <img src= {item.imageUrl}/>
//         <div>
//         <p>{item.name}</p>
//         </div>
//         <button onClick={addItem}>Add</button>
//         <button onClick={editItem.bind(null, item.id)}>Edit</button>
//         <button onClick={removeItem.bind(null, item.id)}>Remove</button>
//         </div>

//     })}
// </div>

//   )
// }


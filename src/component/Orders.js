import React from 'react'
import { useState } from 'react';
import orders from '../order.json';
import Orderlist from './Orderlist'
import OrderCalendar from '../OrderCalendar';

const Orders = ({sidenavbar}) => {
  const [order, setOrder] = useState(orders);
  const handleDelete = (ordertodelete)=>{
    alert("Are you sure you want to delete the order");
    const updatedProduct = order.filter(order => order !== ordertodelete);
    setOrder(updatedProduct);
    console.log(order);
  }
  return (
    <div className='container' style={{marginLeft: sidenavbar?"225px":"80px", maxWidth: sidenavbar?"1035px":"1180px"}}>
      <div className='row text-center'>
        <h1>ORDER LIST</h1>
      </div>
      <Orderlist orders = {order} onDelete = {handleDelete} />

      <div className='row my-3'>
      <OrderCalendar orders = {orders}/>
      </div>
    </div>
  )
}

export default Orders

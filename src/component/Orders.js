import React from 'react'
import { useState } from 'react';
import orders from '../order.json';
import products from '../product.json';
import Orderlist from './Orderlist'
import OrderCalendar from '../component/OrderCalendar';

const Orders = ({ sidenavbar }) => {
  const [order, setOrder] = useState(orders);
  const categories = ["Pending", "Delivered", "Shipped", "Processing"]
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [editedOrder, setEditedOrder] = useState({
    order_id: '',
    name: '',
    status: '',
    total_amount: '',
    expected_delivery: '',
    date: '',
    products: []
  })
  const handleDelete = (ordertodelete) => {
    alert("Are you sure you want to delete the order");
    const updatedProduct = order.filter(order => order !== ordertodelete);
    setOrder(updatedProduct);
    console.log(order);
  }
  const handleEdit = (ordertoedit) => {
    //To get the product name form product json using product id from order.json
    const editedProducts = ordertoedit.products.map(item => ({
      ...item,
      name: products.find(product => product.id === item.product_id)?.name || "Product Not Found"
    }));

    setSelectedOrder({ ...ordertoedit, products: editedProducts });
    setEditedOrder({ ...ordertoedit, products: editedProducts });
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedOrder(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleCategoryChange = (status) => {
    setEditedOrder(prevState => ({
      ...prevState,
      status: status
    }));
  };

  const handleSubmit = () => {
    const index = orders.findIndex(order => order.order_id === editedOrder.order_id);
    if (index !== -1) {
      const updatedOrders = [...orders];
      updatedOrders[index] = editedOrder;
      setOrder(updatedOrders);
    }
  };


  return (
    <div className={`container container-responsive ${sidenavbar ? 'sidenavbar-active' : 'sidenavbar-inactive'} `} >
      <div className='row text-center'>
        <h1 className='my-3'><span style={{ borderBottom: "2px solid gold" }}>ORDER LIST</span></h1>
      </div>
      <Orderlist orders={order} onDelete={handleDelete} onEdit={handleEdit} />

      <div className='row my-3'>
        <OrderCalendar orders={orders} />
      </div>


      {/* Order Edit Modal start here  */}
      <div className="modal fade" id="orderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="orderModalLabel">Edit order Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" value={editedOrder.name} onChange={handleInputChange} id="exmpleName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Total Amount</label>
                  <input type="number" className="form-control" id="exmpleQuantity" name="quantity" value={editedOrder.total_amount} onChange={handleInputChange} />
                </div>
                <div className='row'>
                  <div className='col-md-5'>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Ordered Date </label>
                      <h5>{editedOrder.date}</h5>
                    </div>
                  </div>
                  <div className='col-md-5'>
                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">Delivery Date </label>
                      <h5>{editedOrder.expected_delivery}</h5>
                    </div>
                  </div>
                </div>
                <div className='row my-2'>
                  <div className='col-md-5'><strong>Product Name</strong></div>
                  <div className='col-md-5'><strong>Quantity</strong></div>
                  {
                    editedOrder.products.map((item) => (
                      <>
                        <div className='col-md-5'>{item.name}</div>
                        <div className='col-md-5'>{item.quantity}</div>
                      </>
                    ))
                  }
                </div>
                <div className="form-group">
                  <label htmlFor="category">Status</label>
                  <select className="form-control" id="category" name="category" value={editedOrder.status} onChange={(e) => handleCategoryChange(e.target.value)}>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders

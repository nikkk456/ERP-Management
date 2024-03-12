import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import orders from '../order.json';
import products from "../product.json";
import { Link } from 'react-router-dom';

const Dashboard = ({sidenavbar}) => {
    const total_product = products.length;
    const total_order = orders.length;
    var total_revenue = 0;
    orders.map((data, index)=>{
        total_revenue = total_revenue+parseInt(data.total_amount);
    })
    const data = orders;
    
    return (
        <>
            <div className='container'  style={{marginLeft: sidenavbar?"225px":"80px", maxWidth: sidenavbar?"1035px":"1178px"}}>
                <div className='row text-center'>
                    <h1>Dashboard</h1>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card mb-3 card2" style={{ maxWidth: "540px", height: "150px" }}>
                            <div class="row g-0" style={{ flexWrap: "nowrap" }}>
                                <div class="col-md-8 col-8">
                                    <div class="card-body">
                                        <h2 class="card-title">{total_product}</h2>
                                        <h5 class="card-text">Total Product</h5>
                                        <Link to='/product'><button className='btn btn-primary'>View More</button></Link>
                                    </div>
                                </div>
                                <div class="col-md-4 col-4" style={{ display: "flex", alignItems: "center" }}>
                                    <img src="./product.png" class="img-fluid rounded-start" alt="product" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card mb-3 card2" style={{ maxWidth: "540px", height: "150px", backgroundColor:"#65658e" }}>
                            <div class="row g-0" style={{ flexWrap: "nowrap" }}>
                                <div class="col-md-8 col-8">
                                    <div class="card-body">
                                        <h2 class="card-title">{total_order}</h2>
                                        <h5 class="card-text">Total Orders</h5>
                                        <Link to='/orders'><button className='btn btn-primary'>View More</button></Link>
                                    </div>
                                </div>
                                <div class="col-md-4 col-4" style={{ display: "flex", alignItems: "center" }}>
                                    <img src="./order.png" class="img-fluid rounded-start" alt="order" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card mb-3 card2" style={{ maxWidth: "540px", height: "150px", backgroundColor:"#ab54ab"}}>
                            <div class="row g-0" style={{ flexWrap: "nowrap" }}>
                                <div class="col-md-8 col-8">
                                    <div class="card-body">
                                        <h2 class="card-title">&#36; {total_revenue}</h2>
                                        <h5 class="card-text">Total Revenue</h5>
                                    </div>
                                </div>
                                <div class="col-md-4 col-4" style={{ display: "flex", alignItems: "center" }}>
                                    <img src="./revenue.png" class="img-fluid rounded-start" alt="revenue" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8 my-4'>
                        <h3>Sale Record</h3>
                        <LineChart width={600} height={300} data={data} margin={{ top: 5, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="total_amount" stroke="#8884d8" />
                            <CartesianGrid strokeDasharray="5 5" />
                            <XAxis dataKey="date" />
                            <YAxis dataKey="total_amount" />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                    </div>
                    <div className='col-md-4 my-4' style={{boxShadow: "4px 4px 4px 1px grey", borderRadius:"10px"}}>
                        <div className='row'>
                            <h3 className='my-3'>Today's Overview</h3>
                            <div className='col-md-8'>
                                <p><strong>Today's Report:</strong></p>
                            </div>
                            <div className='col-md-4'>
                                <p><strong>Amount</strong></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8'>
                                <p><strong>Total revenue:</strong></p>
                            </div>
                            <div className='col-md-4'>
                                <p><strong>&#36; 0.00</strong></p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8'>
                                <p><strong>Order Delivered:</strong></p>
                            </div>
                            <div className='col-md-4'>
                                <p><strong>0.00</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

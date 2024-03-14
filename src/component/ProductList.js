import React from 'react'

const ProductList = ({ products, onDelete, onEdit }) => {
    //To group the product on the basis of category
    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 col-5'>
                    <h1><span style={{ borderBottom: '2px solid gold' }}>PRODUCT LIST</span></h1>
                </div>
                <div className='col-md-5 col-7' style={{ display: "flex", justifyContent: "end", alignItems: "center", }}>
                    <button className='btn' style={{ backgroundColor: "#4275b6", borderRadius: "15px 0px", color: "white", boxShadow: "4px 4px 5px 1px grey" }} data-bs-toggle="modal" data-bs-target="#newproductModal">Add new Product</button>
                </div>
            </div>
            <div className='row'>
                {
                    //To iterate the object and to render the products according to category
                    Object.entries(groupedProducts).map(([category, categoryProduct], index) => (
                        <>
                            <div className='row my-3' style={{ backgroundColor: "antiquewhite", borderRadius: "10px" }}>
                                <h2>{category}</h2>
                            </div>
                            <div className='row'>
                                {
                                    categoryProduct.map((item) => (
                                        <>
                                            <div className='col-md-4' key={item.id}>
                                                <div className="card mb-3 " style={{ maxWidth: "540px", boxShadow: "4px 4px 6px 1px grey" }}>
                                                    <div className='row' >
                                                        <h3 className="text-center"><span style={{ borderBottom: "2px solid gold" }}>{item.name}</span>
                                                        </h3>
                                                    </div>
                                                    <div className="row g-0" style={{ flexWrap: "nowrap" }}>
                                                        <div className="col-md-8 col-8">
                                                            <div className="card-body">
                                                                <h5 className="card-text">Quantity: {item.quantity}</h5>
                                                                <h5 className="card-text">Category: {item.category}</h5>
                                                                <h6 className="card-text">&#36; {item.price}</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-4" style={{ display: "flex", alignItems: "center" }}>
                                                            <img src="./Image/product.png" className="img-fluid rounded-start" alt="product" />
                                                        </div>
                                                    </div>
                                                    <div className='row g-0 mb-2'>
                                                        <div className='col-md-5 col-5' style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => onEdit(item)} style={{ backgroundColor: "#4275b6", borderRadius: "15px 0px", color: "white" }}><strong>Update</strong></button>
                                                        </div>
                                                        <div className='col-md-5 col-5' style={{ display: "flex", justifyContent: "center" }}>
                                                            <button className='btn btn-danger' onClick={() => onDelete(item)} style={{ borderRadius: "15px 0px" }}><strong>Delete</strong></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList

import React, { useState } from 'react'
import products from '../product.json';
import ProductList from './ProductList';

const Product = ({ sidenavbar }) => {
  const [product, setProduct] = useState(products);
  const [selectedproduct, setSelectedProduct] = useState(null);
  const categories = ["Electronics", "Apparel", "Footwear", "Accessories", "Home & Office", "Home & Kitchen", "Fitness", "Furniture", "Home & Bedroom"]
  const [editedProduct, setEditedProduct] = useState({
    id: '',
    name: '',
    quantity: '',
    category: '',
    price: '',
  });
  const [newProduct, setNewProduct] = useState({
    id: product.length + 1,
    name: '',
    category: 'Electronics',
    price: '',
    quantity: ''
  });

  const handleEdit = (productToEdit) => {
    setSelectedProduct(productToEdit);
    setEditedProduct(productToEdit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleCategoryChange = (category) => {
    setEditedProduct(prevState => ({
      ...prevState,
      category: category
    }));
  };

  const handleSubmit = () => {
    const index = products.findIndex(product => product.id === editedProduct.id);
    if (index !== -1) {
      const updatedProducts = [...products];
      updatedProducts[index] = editedProduct;
      setProduct(updatedProducts);
    }
  };

  //Functions to Add New Product In The List
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCategoryChangeNew = (category) => {
    setNewProduct(prevState => ({
      ...prevState,
      category: category
    }));
  };

  const handleNewProduct = (e) => {
    e.preventDefault();
    const updatedProductList = [...product, newProduct];
    setProduct(updatedProductList);
    setNewProduct({
      name: '',
      stock: '',
      category: '',
      price: '',
      quantity: ''
    });
  };

  //Function to Delete The Product Form the List
  const handleDelete = (productToDelete) => {
    alert("Are you sure you want to delete this product?");
    const updatedProduct = product.filter(product => product !== productToDelete);
    setProduct(updatedProduct);
  };

  console.log("The product are ", product)
  return (
    <div className={`container container-responsive ${sidenavbar ? 'sidenavbar-active' : 'sidenavbar-inactive'} `} >
      <ProductList products={product} onDelete={handleDelete} onEdit={handleEdit} />

      {/* Modal start here  */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Product Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" value={editedProduct.name} onChange={handleInputChange} id="exmpleName" aria-describedby="emailHelp" />
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                      <input type="number" className="form-control" id="exmpleQuantity" name="quantity" value={editedProduct.quantity} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                      <input type="number" className="form-control" id="exmpleQuantity" name="price" value={editedProduct.price} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select className="form-control" id="category" name="category" value={editedProduct.category} onChange={(e) => handleCategoryChange(e.target.value)}>
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

      {/* Modal for Adding New Product  */}
      <div className="modal fade" id="newproductModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" value={newProduct.name} onChange={handleChange} id="exmpleName" aria-describedby="emailHelp" />
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                      <input type="number" className="form-control" id="exmpleQuantity" name="quantity" value={newProduct.quantity} onChange={handleChange} />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                      <input type="number" className="form-control" id="exmpleQuantity" name="price" value={newProduct.price} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select className="form-control" id="category" name="category" value={newProduct.category} onChange={(e) => handleCategoryChangeNew(e.target.value)}>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleNewProduct}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

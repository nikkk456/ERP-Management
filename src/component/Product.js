import React, { useState } from 'react'
import products from '../product.json';
import ProductList from './ProductList';


const Product = ({sidenavbar}) => {
  const [product, setProduct] = useState(products);
  const [selectedproduct, setSelectedProduct] = useState(null);
  const categories = ["Electronics", "Apparel", "Footwear", "Accessories", "Home & Office", "Home & Kitchen", "Fitness", "Furniture","Home & Bedroom"]
  const [editedProduct, setEditedProduct] = useState({
    id: '',
    name: '',
    quantity: '',
    category: ''
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

  const handleDelete = (productToDelete) => {
    alert("Are you sure you want to delete this product?");
    const updatedProduct = product.filter(product => product !== productToDelete);
    setProduct(updatedProduct);
  };
  return (
    <div className={`container container-responsive ${sidenavbar?'sidenavbar-active':'sidenavbar-inactive'} `} >
      <ProductList products={product} onDelete={handleDelete} onEdit={handleEdit} />



      {/* Modal start here  */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Quantity</label>
                  <input type="number" className="form-control" id="exmpleQuantity" name="quantity" value={editedProduct.quantity} onChange={handleInputChange} />
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
    </div>
  )
}

export default Product

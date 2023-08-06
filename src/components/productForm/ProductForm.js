import React, { useState } from 'react';
import './productForm.css';

const ProductForm = () => {
  const [itemName, setItemName] = useState('');
  const [productType, setProductType] = useState('');
  const [supplierName, setSupplierName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    console.log(formattedDate)

    // Here you can perform any action you want with the form data
    const info = {
      formattedDate,
      itemName,
      productType,
      supplierName,
      quantity,
      price,
    }
    console.log(info)

    // Reset the form fields after submission
    setItemName('');
    setProductType('');
    setSupplierName('');
    setQuantity('');
    setPrice('');


    fetch('http://localhost:5000/data',
    
      {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(info)
    }
      
    )
    .then(res=>res.json())
    .then(data=>console.log(data))

  };

  return (
    <div className="container text-black" >
      <h1 className='text-black'>Product Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productType">Product Type:</label>
          <input
            type="text"
            id="productType"
            name="productType"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="supplierName">Supplier Name:</label>
          <input
            type="text"
            id="supplierName"
            name="supplierName"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button className='btn' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;

import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';
import './ProductInfo.css'

const ProductInfo = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/info')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  if(products){
    console.log(products)
  }

  // if (products.length === 0) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div >
      <div className="overflow-x-auto ">
        <table className="table border-collapse border border-slate-500 ">
          <thead>
            <tr className='text-black'>
              <th>no</th>
              <th>date</th>
              <th>Item Name:</th>
              <th>Product Type:</th>
              <th>Supplier Name:</th>
              <th>Quantity:</th>
              <th>Price:</th>
            </tr>
          </thead>
          <tbody>
            {  products.map((product, index) => (
              <TableRow
                key={index}
                index={index}
                date={product.formattedDate}
                itemName={product.itemName}
                productType={product.productType}
                supplierName={product.supplierName}
                quantity={product.quantity}
                price={product.price}
              ></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductInfo;

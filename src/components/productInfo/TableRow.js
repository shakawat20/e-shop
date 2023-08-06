import React from 'react';
// import './ProductInfo.css'

const TableRow = ({index,date,itemName,productType,supplierName,quantity,price}) => {

    return (
      
            <tr className='text-black'>
                <th>{index+1}</th>
                <td>{date}</td>
                <td>{itemName}</td>
                <td>{productType}</td>
                <td>{supplierName}</td>
                <td>{quantity}</td>
                <td>{price}</td>
            </tr>

      
    );
};

export default TableRow;
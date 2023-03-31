import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductRow({product}) {
    const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow

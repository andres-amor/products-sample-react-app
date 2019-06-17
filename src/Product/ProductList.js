import React from 'react';
import ProductListItem from './ProductListItem';
import AppContext from '../AppContext';

class ProductList extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        {(this.context.products.length === 0) ? <p>No products on the list</p> : ''}
        {this.context.products.map(item => <ProductListItem product={item} key={item.id} />)}

        <br />
        <button onClick={this.context.addPotato}>Add Potato</button>
      </div>
    );
  }
}

export default ProductList;
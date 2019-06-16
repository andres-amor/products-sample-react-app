import React from 'react';
import './ProductListItem.css';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="product">
        <h3>{this.props.product.name}</h3>
        <span className="price">Price: ${this.props.product.price}</span>

        <img className="thumbnail" src="images/caroop.png" alt="Car OOP" width="100" height="100" />
      </div>
    );
  }
}

export default ProductListItem;
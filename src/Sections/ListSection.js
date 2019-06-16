import React from 'react';
import ProductList from '../Product/ProductList';
import AppContext from '../AppContext';

class ListSection extends React.Component {
  static contextType = AppContext;
  render() {
    return (
      <div>
        <h1>List</h1>

        <ProductList />

        <br />
        <button onClick={this.context.clearProductList}>Delete all products</button>
      </div>
    );
  }
}

export default ListSection;
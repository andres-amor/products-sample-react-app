import React from 'react';
import ProductList from '../Product/ProductList';
import NewProductForm from '../Product/NewProductForm';

class ListSection extends React.Component {
  render() {
    return (
      <div>
        <h1>List</h1>

        <ProductList products={this.props.products} />
        <NewProductForm addNewProduct={this.props.addNewProduct} />

        <br />
        <button onClick={this.props.addPotato}>Add Potato</button>
        <br />
        <button onClick={this.props.clearProductList}>Delete all products</button>
      </div>
    );
  }
}

export default ListSection;
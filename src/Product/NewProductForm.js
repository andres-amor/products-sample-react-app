import React from 'react';
import './NewProductForm.css';

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      price: 0
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Ignore default browser action.
    // Send form data.
    this.props.addNewProduct({
      name: this.state.name,
      price: this.state.price
    });
    // Reset form.
    this.setState({
      name: '',
      price: 0
    });
  }

  render() {
    return (
      <div className="new-product-form">
        <form onSubmit={this.handleSubmit}>
          <h3>New Product Form</h3>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>

          <br />

          <label>
            Price:
          <input type="number" value={this.state.price} onChange={this.handlePriceChange} />
          </label>

          <br />
          <button type="submit">Add product</button>
        </form>
      </div>
    );
  }
}

export default NewProductForm;
import React from 'react';
import './App.css';
import ListSection from './Sections/ListSection';
import HomeSection from './Sections/HomeSection';
import AppContext from './AppContext';
import Clock from './Clock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSection: 'home',
      showFavoritesButton: false,
      products: [{
        id: 1,
        name: 'Tomato',
        price: 20
      },
      {
        id: 2,
        name: 'Milk',
        price: 20
      },
      {
        id: 3,
        name: 'Water',
        price: 5
      }]
    };
  }

  clearProductList = () => {
    // Removing all products consist on setting a new state with the property products equals to an empty array.
    this.setState({
      products: []
    });
  }

  addPotato = () => {
    // Only add the potato to the product list, if there are no potatos on the product list.
    if (this.state.products.some(p => p.name === 'Potato') === false) {
      // Adding a potato consist on setting a new state with the copy of the current products array + the new potato.
      this.setState({
        products: [...this.state.products, {
          id: this.getNextProductId(),
          name: 'Potato',
          price: 3
        }]
      });
    }
  }

  getNextProductId() {
    var productWithHighestId = this.state.products.sort((a, b) => b.id - a.id)[0];
    if (productWithHighestId === undefined) {
      return 1; // List is empty, so use 1 as first product id.
    } else {
      return productWithHighestId.id + 1; // List is not empty, increase one to the highest id for the next product.
    }
  }

  addNewProduct = (newProduct) => {
    this.setState({
      products: [...this.state.products, {
        id: this.getNextProductId(),
        name: newProduct.name,
        price: newProduct.price
      }]
    });
  }

  goToHome = () => {
    this.setState({
      currentSection: 'home'
    });
  }

  goToList = () => {
    this.setState({
      currentSection: 'list'
    });
  }

  toggleFavoritesButton = () => {
    this.setState({
      showFavoritesButton: !this.state.showFavoritesButton
    });
  }

  renderCurrentSection() {
    switch (this.state.currentSection) {
      case 'list':
        return (
          <ListSection />
        );
      case 'home':
      default:
        return <HomeSection />;
    }
  }

  render() {
    return (
      <div>
        <header>
          <button onClick={this.goToHome}>Home</button>
          <button onClick={this.goToList}>List</button>
          <button onClick={this.toggleFavoritesButton}>Show/Hide Favorites button</button>
          {this.state.showFavoritesButton ? <button>Favorites</button> : ''}
        </header>

        <AppContext.Provider value={{
          products: this.state.products,
          addPotato: this.addPotato,
          clearProductList: this.clearProductList,
          addNewProduct: this.addNewProduct
        }}>
          <main>
            {this.renderCurrentSection()}
          </main>
        </AppContext.Provider>

        <footer>
          This is the footer
          <br />
          <Clock name="John" />
        </footer>
      </div>
    );
  }
}

export default App;
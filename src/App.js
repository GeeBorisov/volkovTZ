import React, { useState, useEffect } from 'react';
import ProductTable from './components/ProductTable';
import ProductList from './components/ProductList';
import Header from './components/Header';
import Popup from './components/Popup';
import Login from './components/Login';

import './scss/main.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [weight, setWeight] = useState('0');
  const [sales, setSales] = useState('0');

  useEffect(() => {
    setWeight('0');
    setSales('0');
  }, [selectedProduct]);

  const [products, setProducts] = useState([]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleIngredientChange = (e) => {
    const selectedIngredients = Array.from(e.target.selectedOptions, (option) => option.value);
    setIngredients(selectedIngredients);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSalesChange = (e) => {
    setSales(e.target.value);
  };

  const handleSave = () => {
    if (!ingredients || ingredients.length === 0) {
      alert('Выберите ингредиенты');
      return;
    }
    const existingProductIndex = products.findIndex(
      (product) => product.product === selectedProduct,
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];

      updatedProducts[existingProductIndex].weight =
        parseFloat(updatedProducts[existingProductIndex].weight) + parseFloat(weight);
      updatedProducts[existingProductIndex].sales =
        parseFloat(updatedProducts[existingProductIndex].sales) + parseFloat(sales);

      updatedProducts[existingProductIndex].balance =
        parseFloat(updatedProducts[existingProductIndex].weight) -
        parseFloat(updatedProducts[existingProductIndex].sales);

      setProducts(updatedProducts);
    } else {
      const newProduct = {
        product: selectedProduct,
        ingredients: ingredients,
        weight: weight,
        sales: sales,
        balance: parseFloat(weight) - parseFloat(sales),
      };
      setProducts([...products, newProduct]);
    }

    setSelectedProduct(null);
    setIngredients([]);
    setWeight('');
    setSales('0');

    alert('Товар добавлен в таблицу');
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setIngredients([]);
    setWeight('');
    setSales('');
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <Header username={username} onLogout={handleLogout} />
          <div className="page">
            <ProductList onProductClick={handleProductClick} />
            {selectedProduct && (
              <Popup
                selectedProduct={selectedProduct}
                ingredients={ingredients}
                weight={weight}
                sales={sales}
                onSave={handleSave}
                onCancel={handleCancel}
                onIngredientChange={handleIngredientChange}
                onWeightChange={handleWeightChange}
                onSalesChange={handleSalesChange}
              />
            )}
            <ProductTable products={products} />
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

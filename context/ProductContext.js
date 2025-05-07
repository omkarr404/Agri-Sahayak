// contexts/ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'टोमॅटो',
      price: 1500,
      image: require('../assets/tomato.jpg'),
      description: 'ताजे आणि सेंद्रिय टोमॅटो.',
    },
    {
      id: '2',
      name: 'बटाटा',
      price: 1000,
      image: require('../assets/potato.jpg'),
      description: 'नवीन पिकवलेले बटाटे.',
    },
  ]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now().toString() }]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

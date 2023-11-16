import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
    },
    {
      id: 2,
      name: "Headphones",
    },
    {
      id: 3,
      name: "Smart Watch",
    },
    {
      id: 4,
      name: "Headphones",
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </div>
  );
};

export default Products;

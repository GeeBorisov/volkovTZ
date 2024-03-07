import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div className="page__table">
      <h2 className="page__table-title">Таблица остатков товаров гриль</h2>
      <table className="page__table-table">
        <thead>
          <tr>
            <th>Название товара</th>
            <th>Ингредиент</th>
            <th>Кол-во</th>
            <th>Продажи за день</th>
            <th>Текущий остаток</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.product}</td>
              <td>{product.ingredients}</td>
              <td>{product.weight}</td>
              <td>{product.sales}</td>
              <td>{product.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

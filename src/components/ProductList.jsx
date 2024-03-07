import React from 'react';

const ProductList = ({ onProductClick }) => {
  return (
    <div className="container">
      <h2 className="page-title">Товары гриль</h2>
      <div className="page__main-lists">
        <div className="page__list">
          <h2 className="page__list-title">Птица</h2>
          <button className="page__list-item" onClick={() => onProductClick('Куриное филе')}>
            Куриное филе
          </button>
          <button className="page__list-item" onClick={() => onProductClick('Куриная грудка')}>
            Куриная грудка
          </button>
          <button className="page__list-item" onClick={() => onProductClick('Утиные крылья')}>
            Утиные крылья
          </button>
        </div>

        <div className="page__list">
          <h2 className="page__list-title">Мясо</h2>
          <button className="page__list-item" onClick={() => onProductClick('Шашлык из свинины')}>
            Шашлык из свинины
          </button>
          <button className="page__list-item" onClick={() => onProductClick('Шашлык из курицы')}>
            Шашлык из курицы
          </button>
          <button className="page__list-item" onClick={() => onProductClick('Шашлык из баранины')}>
            Шашлык из баранины
          </button>
        </div>

        <div className="page__list">
          <h2 className="page__list-title">Рыба</h2>
          <button
            className="page__list-item"
            onClick={() => onProductClick('Стейк из красной рыбы')}>
            Стейк из красной рыбы
          </button>
          <button className="page__list-item" onClick={() => onProductClick('Стейк из белой рыбы')}>
            Стейк из белой рыбы
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

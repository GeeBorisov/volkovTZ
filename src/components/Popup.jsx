import React from 'react';
import data from '../assets/data.json';

const Popup = ({
  selectedProduct,
  ingredients,
  weight,
  sales,
  onSave,
  onCancel,
  onIngredientChange,
  onWeightChange,
  onSalesChange,
}) => {
  const ingredientOptions = [];

  data.grillProducts.forEach((product) => {
    product.ingredients.forEach((ingredient) => {
      if (!ingredientOptions.includes(ingredient)) {
        ingredientOptions.push(ingredient);
      }
    });
  });

  return (
    <div className="page__popup">
      <h2 className="page__popup-title">{selectedProduct}</h2>
      <label>
        Выберите ингредиенты:
        <select multiple value={ingredients} onChange={onIngredientChange} required>
          {ingredientOptions.map((ingredient, index) => (
            <option key={index} value={ingredient}>
              {ingredient}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Введите кол-во:
        <input type="text" value={weight} onChange={onWeightChange} required />
      </label>
      <br />
      <label>
        Введите продажи за день:
        <input type="text" value={sales} onChange={onSalesChange} required />
      </label>
      <br />
      <button onClick={onSave}>Сохранить</button>
      <button onClick={onCancel}>Отмена</button>
    </div>
  );
};

export default Popup;

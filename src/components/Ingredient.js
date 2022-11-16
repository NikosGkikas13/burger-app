import React, { useEffect, useState } from "react";
import "../css/createBurger.css";

const Ingredient = ({ ingredient, burgerIng, setBurgerIng }) => {
  const [count, setCount] = useState(0);

  let countOfIngredient = burgerIng.filter((item) => {
    return item == ingredient.src;
  });
  console.log(countOfIngredient);
  useEffect(() => {
    setCount(countOfIngredient.length);
  }, []);
  const addCount = (item) => {
    setCount(count + 1);
    setBurgerIng([...burgerIng, item.src]);
  };
  const subCount = (item) => {
    count > 0 && setCount(count - 1);
    let found = burgerIng.lastIndexOf(item.src);
    var newArray = burgerIng.filter((burgerItem, index) => {
      return index != found;
    });
    setBurgerIng(newArray);
  };
  return (
    <div className="ingredient">
      <img
        src={`https://xm-crm-react-exercise-server.herokuapp.com/img/${ingredient.src}`}
        alt=""
      />
      <div>
        <h1>{ingredient.name}</h1>
        <div className="ingredient-count">
          <button onClick={() => subCount(ingredient)}>-</button>
          <span>{count}</span>
          <button onClick={() => addCount(ingredient)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;

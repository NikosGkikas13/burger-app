import React from "react";
import "../css/createBurger.css";
import Ingredient from "./Ingredient";

const CreateBurger = ({ ing, burgerIng, setBurgerIng }) => {
  return (
    <div className="ingredients">
      {ing &&
        ing.map((item) => {
          return (
            <Ingredient
              key={item.id}
              ingredient={item}
              burgerIng={burgerIng}
              setBurgerIng={setBurgerIng}
            />
          );
        })}
    </div>
  );
};

export default CreateBurger;

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
} from "react-router-dom";
import CreateBurger from "./CreateBurger";
import ViewOrder from "./ViewOrder";

import Axios from "axios";

const Home = ({ fetchIngredients, user, ing }) => {
  const [burgerIng, setBurgerIng] = useState([]);
  useEffect(() => {
    fetchIngredients();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Nav user={user} />
        <Routes>
          <Route
            path="/create-burger"
            element={
              <CreateBurger
                ing={ing}
                burgerIng={burgerIng}
                setBurgerIng={setBurgerIng}
              />
            }
          />
          <Route
            path="/view-order"
            element={<ViewOrder burgerIng={burgerIng} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;

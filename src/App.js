import "./App.css";
import Meals from "./components/meals/Meals";
import { useReducer, useState } from "react";
import CartContext from "./store/CartContext";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";

const MEALS_DATA = [
  {
    id: "1",
    title: "Hamburger 1",
    desc: "Hamburger 1: Hamburger, a sandwich consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.",
    price: 12,
    img: "/img/meals/1.jpg",
  },
  {
    id: "2",
    title: "Hamburger 2",
    desc: "Hamburger 2: Hamburger, a sandwich consisting of one or more",
    price: 12,
    img: "/img/meals/2.jpg",
  },
  {
    id: "3",
    title: "Hamburger 3",
    desc: "Hamburger 3 :one or more cooked beef patties, placed inside a sliced bread roll or bun roll",
    price: 12,
    img: "/img/meals/3.jpg",
  },
  {
    id: "4",
    title: "Hamburger 4",
    desc: "Hamburger 4: one or more cooked beef patties, placed inside a sliced bread roll or bun roll",
    price: 12,
    img: "/img/meals/4.jpg",
  },
  {
    id: "5",
    title: "Hamburger 5",
    desc: "Hamburger 5: of one or more cooked beef patties, placed inside a sliced bread roll or bun roll",
    price: 12,
    img: "/img/meals/5.jpg",
  },
  {
    id: "6",
    title: "Hamburger 6",
    desc: "Hamburger 6: of one or more cooked beef patties, placed inside a sliced bread roll or bun roll",
    price: 12,
    img: "/img/meals/6.jpg",
  },
  {
    id: "7",
    title: "Hamburger 7",
    desc: "Hamburger 7: of one or more cooked beef patties, placed inside a sliced bread roll or bun roll",
    price: 12,
    img: "/img/meals/7.jpg",
  },
];

const cartReducer = (state, action) => {
  const newCart = { ...state };

  switch (action.type) {
    default:
      return state;
    case "ADD":
      if (newCart.items.indexOf(action.meal) === -1) {
        newCart.items.push(action.meal);
        action.meal.amount = 1;
        console.log(action.meal.amount, "1");
      } else {
        action.meal.amount += 1;
        console.log(action.meal.amount, "2");
      }
      newCart.totalAmount += 1;
      newCart.totalPrice += action.meal.price;
      return newCart;
    case "REMOVE":
      action.meal.amount -= 1;
      if (action.meal.amount === 0) {
        newCart.items.splice(newCart.items.indexOf(action.meal), 1);
      }
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      return newCart;
    case "CLEAR":
      newCart.items.forEach((item) => delete item.amount);
      newCart.items = [];
      newCart.totalAmount = 0;
      newCart.totalPrice = 0;
      return newCart;
  }
};

function App() {
  const [mealsData, setMealsData] = useState(MEALS_DATA);

  const [cartData, cartDispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  const filterHandler = (keyword) => {
    const newMealsData = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    );
    setMealsData(newMealsData);
  };

  return (
    <CartContext.Provider value={{ ...cartData, cartDispatch }}>
      <FilterMeals filterHandler={filterHandler} />
      <Meals mealsData={mealsData} />
      <Cart />
    </CartContext.Provider>
  );
}

export default App;

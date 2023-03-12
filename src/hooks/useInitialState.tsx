import { useState } from "react";
import { Product } from "../utils/type";

const initialState = {
  cart: [] as Product[],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload: Product) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;

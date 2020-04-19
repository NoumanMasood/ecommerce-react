import { cartActionTypes } from './cart.types';
import { cartItems } from './cart.util';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: cartItems(state.cartItems, actions.payload)
      }
    default:
      return state;
  }
}

export default cartReducer;
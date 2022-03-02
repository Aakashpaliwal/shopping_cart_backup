const initialState = {
  cart: [],
  cartTotalItems : 0
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TO_CART_SUCCESSFULL":
      let addedItem = state.cart.find((item) => item.id === payload.id);
      if (addedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
          cartTotalItems: state.cart.length
        };
      } else {
        payload.quantity = 1;
        console.log('elsestate',state,payload)
        return {
          ...state,
          cart: [...state.cart, payload],
          cartTotalItems: state.cart.length === 0 ? 1 : state.cart.length + 1
        };
      }

    default:
      return state;
  }
}

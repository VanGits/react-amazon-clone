export const initialState = {
  cart: [],
  noti: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const getNotification = (noti) =>
  noti?.reduce((amountNoti, itemNoti) => itemNoti.price + amountNoti, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,

        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          "Can't remove product (id: ${action.id} as its not in the cart"
        );
      }
      return {
        ...state,
        cart: newCart,
      };
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        cart: [],
      };
    case "ADD_TO_NOTI":
      return {
        ...state,
        noti: [...state.noti, action.item],
      };
    case "REMOVE_FROM_NOTI":
      const indexNoti = state.noti.findIndex(
        (itemNoti) => itemNoti.id === action.id
      );
      let newNoti = [...state.noti];

      if (indexNoti >= 0) {
        newNoti.splice(indexNoti, 1);
      } else {
        console.log(action);
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in notification!`
        );
      }

      return {
        ...state,
        noti: newNoti,
      };
    case "REMOVE_FROM_NOTI_AUTO":
      const indexAuto = state.noti.findIndex(
        (itemNoti) => itemNoti.notif === action.notif
      );
      let newAuto = [...state.noti];

      if (indexAuto >= 0) {
        newAuto.splice(indexAuto, 1);
      } else {
        console.log(action);
        console.warn(
          `Cant remove product (id: ${action.notif}) as its not in notification!`
        );
      }

      return {
        ...state,
        noti: newAuto,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

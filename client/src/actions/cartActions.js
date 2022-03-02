import axios from "axios";
import { API_URL } from "../API_URL/apiUrl";

export const addToCartItems = (props) => (dispatch) => {
  console.log("cartprops", props);
  axios
    .post(`${API_URL}/addToCart`, props, {
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
    .then((res) => {
      dispatch({
        type: "ADD_TO_CART_SUCCESSFULL",
        payload: props,
      });
    });
  // axios
  //     .get(`${API_URL}/products`)
  //     .then(res => {
  //         dispatch({
  //             type: "GET_PRODUCTS",
  //             payload: res.data
  //         });
  //     })
  //     .catch(err => console.log(err));
};

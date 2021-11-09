import { checkCartLimit } from "../../helper/custom-methods";
import {
  SET_ROBOT_LIST,
  ADD_TO_CART,
  SET_FILTERED_LIST,
  REMOVE_ROBOT_FROM_CART,
  UPDATE_FILTER_LIST,
} from "./types";
import { RobotActions, RobotInitialStateI } from "./types";

const initialState: RobotInitialStateI = {
  robotList: [],
  cart: [],
  filteredList: [],
  distinctItemsCount: 0,
};

export function robotsReducer(
  state: RobotInitialStateI = initialState,
  action: RobotActions
): RobotInitialStateI {
  switch (action.type) {
    case SET_ROBOT_LIST: {
      return {
        ...state,
        robotList: action.payload,
        filteredList: action.payload,
      };
    }

    case UPDATE_FILTER_LIST: {
      return {
        ...state,
        filteredList: action.payload,
      };
    }

    case ADD_TO_CART: {
      const cloneCartItems = [...state.cart];
      cloneCartItems.push(action.payload);
      const count = checkCartLimit(cloneCartItems);
      return {
        ...state,
        cart: cloneCartItems,
        distinctItemsCount: count,
      };
    }

    case REMOVE_ROBOT_FROM_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }

    case SET_FILTERED_LIST: {
      return {
        ...state,
        filteredList: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

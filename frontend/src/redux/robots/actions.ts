import {
  SET_ROBOT_LIST,
  SET_FILTERED_LIST,
  SetFilteredRobotListAction,
  SetRobotListAction,
  AddToCartAction,
  RemoveRobotFromCartAction,
  REMOVE_ROBOT_FROM_CART,
  UpdateFilterListAction,
  UPDATE_FILTER_LIST,
} from "./types";

//   import { IPatient } from '../../interfaces/patient';
//   import axios from 'axios';
import { RobotI } from "../../models/RobotList";
import { ADD_TO_CART } from "./types";

export const setRobotList = (robots: RobotI[]): SetRobotListAction => ({
  type: SET_ROBOT_LIST,
  payload: robots,
});

export const setFilterRobotList = (
  robots: RobotI[]
): SetFilteredRobotListAction => ({
  type: SET_FILTERED_LIST,
  payload: robots,
});
export const addRobotToCart = (robot: RobotI): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: robot,
});

export const removeRobotFromCart = (
  robot: RobotI[]
): RemoveRobotFromCartAction => ({
  type: REMOVE_ROBOT_FROM_CART,
  payload: robot,
});

export const updateFilterList = (robot: RobotI[]): UpdateFilterListAction => ({
  type: UPDATE_FILTER_LIST,
  payload: robot,
});

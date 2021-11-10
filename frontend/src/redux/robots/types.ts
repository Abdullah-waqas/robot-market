import { RobotI } from "../../models/RobotList";

export const SET_ROBOT_LIST = "SET_ROBOT_LIST";
export const ADD_TO_CART = "ADD_TO_CART";
export const SET_FILTERED_LIST = "SET_FILTERED_LIST";
export const REMOVE_ROBOT_FROM_CART = "REMOVE_ROBOT_FROM_CART";
export const UPDATE_FILTER_LIST = "UPDATE_FILTER_LIST";

export interface SetRobotListAction {
  type: typeof SET_ROBOT_LIST;
  payload: RobotI[];
}

export interface UpdateFilterListAction {
  type: typeof UPDATE_FILTER_LIST;
  payload: RobotI[];
}

export interface SetFilteredRobotListAction {
  type: typeof SET_FILTERED_LIST;
  payload: RobotI[];
}

export interface RemoveRobotFromCartAction {
  type: typeof REMOVE_ROBOT_FROM_CART;
  payload: RobotI[];
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: RobotI;
}

export type RobotActions =
  | SetRobotListAction
  | AddToCartAction
  | SetFilteredRobotListAction
  | UpdateFilterListAction
  | RemoveRobotFromCartAction;

export interface RobotReducerI {
  robots: RobotInitialStateI;
}

export interface RobotInitialStateI {
  robotList: RobotI[];
  cart: RobotI[];
  filteredList: RobotI[];
  distinctItemsCount: number;
}

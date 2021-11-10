import { useDispatch, useSelector } from "react-redux";
import { RobotI } from "../models/RobotList";
import {
  addRobotToCart,
  removeRobotFromCart,
  setFilterRobotList,
  setRobotList,
} from "../redux/robots/actions";
import { RobotReducerI } from "../redux/robots/types";

export default function useRobotMarket() {
  const dispatch = useDispatch();
  const robotList = useSelector<RobotReducerI, RobotI[]>(
    (state) => state.robots.robotList
  );
  const filteredList = useSelector<RobotReducerI, RobotI[]>(
    (state) => state.robots.filteredList
  );
  const cartItems = useSelector<RobotReducerI, RobotI[]>(
    (state) => state.robots.cart
  );
  const distinctItemCount = useSelector<RobotReducerI, number>(
    (state) => state.robots.distinctItemsCount
  );

  const filterRobots = (value: string) => {
    const filtered = robotList.filter(
      (robot: RobotI) =>
        robot.material.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    dispatch(setFilterRobotList(filtered));
  };

  const addItemToCart = (robot: RobotI) => {
    if (distinctItemCount < 5) {
      const updatedFilterItems = filteredList.filter((item: RobotI) => {
        if (item.id == robot.id) {
          return {
            ...item,
            stock: --item.stock,
          };
        }
        return item;
      });
      dispatch(setFilterRobotList(updatedFilterItems));
      dispatch(addRobotToCart(robot));
    } else {
      alert("You can add 5 distinct items only");
    }
  };

  const removeItemFromCart = (robot: RobotI, index: number) => {
    const updatedCartItems = cartItems.filter(
      (item: RobotI, ind: number) => index !== ind
    );
    dispatch(removeRobotFromCart(updatedCartItems));
    const updatedFilterItems = filteredList.filter((item: RobotI) => {
      if (item.id == robot.id) {
        return {
          ...item,
          stock: ++item.stock,
        };
      }
      return item;
    });
    dispatch(setFilterRobotList(updatedFilterItems));
  };

  const fetchRobots = () => {
    fetch("http://localhost:8000/api/robots")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        const mappedData = res.data.map((i: RobotI, index: number) => ({
          id: index + 1,
          ...i,
        }));
        dispatch(setRobotList(mappedData));
      });
  };

  return {
    robotList,
    filteredList,
    cartItems,
    distinctItemCount,
    filterRobots,
    fetchRobots,
    addItemToCart,
    removeItemFromCart,
  };
}

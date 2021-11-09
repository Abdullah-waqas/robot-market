import * as React from 'react';
import { formatDateDDMMYYYY, formatDatePriceInThai } from '../helper/custom-methods';
import { RobotI } from '../models/RobotList';
import useRobotMarket from '../custom-hooks/useRobotMarketHooks';

interface RobotCartProps {
    robot: RobotI;
    index: number;
}

function RobotCart({ robot, index }: RobotCartProps) {
    const { removeItemFromCart } = useRobotMarket();
    const {
        createdAt,
        image,
        material,
        name,
        price,
        id,
    } = robot;

    const removeFromCart = () => {
        removeItemFromCart(robot, index);
    }
    return (
        <div className="robo-cart card">
            <img className="thumb" src={image} />
            <article>
                <h1>{name}</h1>
                <span>{formatDatePriceInThai(Number(price))}</span>
                <span>{formatDateDDMMYYYY(createdAt)}</span>
                <span>{material}</span>
                <button onClick={() => removeFromCart()}>Delete</button>
            </article>
        </div>
    );
}

export default RobotCart;

import * as React from 'react';
import { formatDateDDMMYYYY, formatDatePriceInThai } from '../helper/custom-methods';
import { RobotI } from '../models/RobotList';
import useRobotMarket from '../custom-hooks/useRobotMarketHooks';

interface RobotCardProps {
    robot: RobotI;
}

function RobotCard({ robot }: RobotCardProps) {
    const { addItemToCart } = useRobotMarket();
    const {
        createdAt,
        image,
        material,
        name,
        price,
        stock,
        id
    } = robot;

    const addToCart = () => {
        addItemToCart(robot);
    }
    return (
        <div className="robo-card card">
            <img className="thumb" src={image} />
            <article>
                <h1>{name}</h1>
                <span>{formatDatePriceInThai(Number(price))}</span>
                <span>Stock: {stock}</span>
                <span>Created At: {formatDateDDMMYYYY(createdAt)}</span>
                <span>Material: {material}</span>
                <button disabled={stock === 0 ? true : false} onClick={() => addToCart()}>Add to Cart</button>
            </article>
        </div>
    );
}

export default RobotCard;

import * as React from 'react';
import RobotCard from '../components/RobotCard';
import RobotCart from '../components/RobotCart';
import useRobotMarket from '../custom-hooks/useRobotMarketHooks';
import { debounce, getTotalSum } from '../helper/custom-methods';
import { RobotI } from '../models/RobotList';



function RobotContainer() {
    const { filterRobots, filteredList, cartItems } = useRobotMarket();

    const filter = (value: string) => {
        filterRobots(value);
    }
    const filterResults = debounce<typeof filter>(filter, 1000)

    return (
        <>
            <div style={{ display: 'flex' }}>

                <div className="" style={{ width: '70%', padding: '20px' }}>
                    <input placeholder="Search with material type" className="search-box" onChange={(e) => filterResults(e.currentTarget.value)} />
                    <div className="robo-list band" style={{ padding: '20px' }}>
                        {filteredList.map((robot: RobotI) => <RobotCard robot={robot} key={robot.id} />)}
                    </div>
                </div>
                <div className="robo-cart band" style={{ width: '30%', padding: '20px' }}>
                    <h1>Cart Items</h1>
                    {cartItems.map((robot: RobotI, index: number) => <RobotCart robot={robot} index={index} key={index} />)}
                    <h4>Total Price: {getTotalSum(cartItems)}</h4>
                    <h4>Total Amount: {cartItems.length}</h4>
                </div>
            </div>
        </>
    );

}
export default RobotContainer;


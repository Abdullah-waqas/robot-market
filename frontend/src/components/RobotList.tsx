import * as React from 'react';
import GetRobotsHook from '../custom-hooks/GetRobotsHook';
import RobotCard from './RobotCard';
import { RobotI } from '../models/RobotList';

function RobotList({ robotList }: { robotList: RobotI[] }) {
    return (
        <div className="robo-list">
            {robotList.map((robot: RobotI) => <RobotCard robot={robot} key={robot.id}/>)}
        </div>
    );
}

export default RobotList;

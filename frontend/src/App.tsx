import React, { useEffect } from 'react';
import RobotContainer from './container/RobotContainer';
import useRobotMarket from './custom-hooks/useRobotMarketHooks';


function App() {
  const { fetchRobots } = useRobotMarket();
  useEffect(() => {
    fetchRobots();
  }, [])
  return (
    <div className="App">
      <h1>Robot Market</h1>
      {/*Add your code here*/}
      <RobotContainer />
    </div>
  );
}

export default App;

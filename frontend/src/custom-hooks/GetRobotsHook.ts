import React, { useEffect, useState } from 'react';

function GetRobotsHook() {
    const [robots, getRobots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/robots')
            .then(data => {
                return data.json();
            })
            .then(res => {
                getRobots(res.data);
            });
    }, [])
    return [robots];
}

export default GetRobotsHook;

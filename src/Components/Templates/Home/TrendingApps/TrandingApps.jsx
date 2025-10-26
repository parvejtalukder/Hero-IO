import React, { useEffect, useState } from 'react';

const TrandingApps = () => {

    const [trendingApps, setTrendingApps] = useState([]);

    useEffect(() => {
    fetch("/dataBase.json")
      .then((res) => res.json())
      .then((data) => {
        setTrendingApps(data); 
      })
      .catch((err) => console.error("Faching ERR:", err));
    }, []);

    console.log(trendingApps);

    return (
        <div>
            
        </div>
    );
};

export default TrandingApps;
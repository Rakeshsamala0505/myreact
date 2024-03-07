import React, { useState, useEffect } from 'react';

function CryptoCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true'
        );
        const jsonData = await response.json();
        setData(jsonData.bitcoin);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-card">
      {data && (
        <div>
          <h1>Bitcoin</h1>
          <h2>${data.usd.toFixed(2)}</h2> <h4>{data.usd_24h_change.toFixed(3)}%</h4>
          <h3>₹ {data.inr}</h3>
         
        </div>
      )}
    </div>
  );
}

export default CryptoCard;

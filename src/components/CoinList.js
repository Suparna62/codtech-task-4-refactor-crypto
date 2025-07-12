import React from 'react';
import PropTypes from 'prop-types';

const CoinList = ({ coins }) => {
  return (
    <div className="coin-list">
      {coins.map((coin) => (
        <div key={coin.id} className="coin-item">
          <img src={coin.image} alt={coin.name} width="40" />
          <h2>{coin.name}</h2>
          <p>Price: ₹{coin.current_price.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

CoinList.propTypes = {
  coins: PropTypes.array.isRequired,
};

export default React.memo(CoinList);

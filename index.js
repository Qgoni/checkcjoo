const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.coinbase.com/v2',
});

const fetchCoinData = async (coinId) => {
  try {
    const response = await api.get(`/prices/${coinId}-USD/spot`);
    const data = response.data.data;
    console.log(`Current price of ${coinId}:`);
    console.log(`USD: $${data.amount.toFixed(2)}`);
  } catch (error) {
    console.error(`Error fetching coin data for ${coinId}:`, error.message);
  }
};

const fetchCoinDataMultiple = async (coinIds) => {
  try {
    const responses = await Promise.all(coinIds.map((id) => api.get(`/prices/${id}-USD/spot`)));
    const data = responses.map((response) => response.data.data);
    console.log('Current price of coins:');
    data.forEach((coinData, index) => {
      console.log(`${coinIds[index]}:`);
      console.log(`USD: $${coinData.amount.toFixed(2)}`);
      console.log();
    });
  } catch (error) {
    console.error('Error fetching coin data:', error.message);
  }
};

// Example usage:
fetchCoinData('BTC');
fetchCoinDataMultiple(['BTC', 'ETH', 'LTC']);

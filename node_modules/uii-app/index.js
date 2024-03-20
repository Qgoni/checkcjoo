const axios = require('axios');

const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

axios.get(apiUrl)
  .then(response => {
    const bitcoinPrice = response.data.bitcoin.usd;
    console.log(`Текущая цена Bitcoin: ${bitcoinPrice} USD`);
  })
  .catch(error => {
    console.error('Ошибка при получении информации о криптовалюте:', error);
  });

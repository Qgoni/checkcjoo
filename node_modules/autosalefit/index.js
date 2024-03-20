const ccxt = require('ccxt');

const exchange = new ccxt.binance({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET_KEY',
});

//
const symbol = 'BTC/USDT';
const targetProfit = 0.1; // 10%
const amount = 0.001;

async function sellCrypto() {
  const ticker = await exchange.fetchTicker(symbol);
  const lastPrice = ticker.last;
  const costBasis = 45000; // Себестоимость
  const currentProfit = (lastPrice - costBasis) / costBasis;
  if (currentProfit >= targetProfit) {
    console.log(`Selling ${amount} ${symbol} at ${lastPrice}`);
    const order = await exchange.createMarketSellOrder(symbol, amount);
    console.log(`Order created: ${order.id}`);
  }
}

setInterval(sellCrypto, 60000); // Проверять прибыль каждые 60 секунд

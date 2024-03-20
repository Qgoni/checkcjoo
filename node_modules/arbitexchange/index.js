const ccxt = require('ccxt');

const binance = new ccxt.binance({
  apiKey: 'YOUR_BINANCE_API_KEY',
  secret: 'YOUR_BINANCE_SECRET_KEY',
});
const bitfinex = new ccxt.bitfinex({
  apiKey: 'YOUR_BITFINEX_API_KEY',
  secret: 'YOUR_BITFINEX_SECRET_KEY',
});

const symbol = 'BTC/USDT';
const amount = 0.001;

async function arbitrage() {
  const binanceTicker = await binance.fetchTicker(symbol);
  const bitfinexTicker = await bitfinex.fetchTicker(symbol);
  const binancePrice = binanceTicker.last;
  const bitfinexPrice = bitfinexTicker.last;
  if (binancePrice < bitfinexPrice) {
    console.log(`Buying ${amount} ${symbol} on Binance at ${binancePrice}`);
    await binance.createMarketBuyOrder(symbol, amount);
    console.log(`Selling ${amount} ${symbol} on Bitfinex at ${bitfinexPrice}`);
    await bitfinex.createMarketSellOrder(symbol, amount);
  }
}

setInterval(arbitrage, 60000); // Искать арбитражные возможности каждые 60 секунд

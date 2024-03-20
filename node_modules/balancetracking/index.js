const ccxt = require('ccxt');

const exchange = new ccxt.binance({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET_KEY',
});

const symbol = 'BTC';

async function checkBalance() {
  const balance = await exchange.fetchBalance();
  const btcBalance = balance[symbol].free;
  console.log(`Current ${symbol} balance: ${btcBalance}`);
}

setInterval(checkBalance, 60000); // Проверять баланс каждые 60 секунд

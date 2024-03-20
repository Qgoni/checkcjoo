const ccxt = require('ccxt');
const moment = require('moment');

const exchange = new ccxt.binance({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET_KEY',
});

const symbol = 'BTC/USDT';
const startTime = moment().subtract(1, 'day').toISOString();
const endTime = moment().toISOString();

async function generateReport() {
  const orders = await exchange.fetchOrders(symbol, undefined, undefined, undefined, startTime, endTime);
  const totalCost = orders.reduce((acc, order) => acc + parseFloat(order.cost), 0);
  const totalProfit = orders.reduce((acc, order) => acc + parseFloat(order.profit), 0);
  console.log(`Total cost: ${totalCost}`);
  console.log(`Total profit: ${totalProfit}`);
}

generateReport();

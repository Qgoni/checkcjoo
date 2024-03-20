const ccxt = require('ccxt');

const exchange = new ccxt.binance({
  apiKey: 'YOUR_API_KEY',
  secret: 'YOUR_SECRET_KEY',
});

const symbol = 'BTC';
const fromAddress = 'YOUR_FROM_ADDRESS';
const toAddress = 'YOUR_TO_ADDRESS';
const amount = 0.001;

async function transferCrypto() {
  console.log(`Transferring ${amount} ${symbol} from ${fromAddress} to ${toAddress}`);
  const txid = await exchange.withdraw(symbol, amount, toAddress, {
    addressFrom: fromAddress,
  });
  console.log(`Transaction created: ${txid}`);
}

setInterval(transferCrypto, 60000); // Переводить каждые 60 секунд

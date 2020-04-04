const KeyManager = require('../lib/KeyManager')
const CryptoAPI = require('../lib/CryptoAPI')

const check = {
  async price(cmd) {
    try {
        const keyManager = new KeyManager();
        const key = keyManager.getKey();

        // console.log(key)

        const api = new CryptoAPI(key);
        const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);
        console.log(priceOutputData);
        // console.log(cmd.coin)

    } catch (error) {
        console.error(error.message.red)
    }
  },
};


module.exports = check;
const inquirer = require("inquirer");
const colors = require("colors");
const KeyManager = require("../lib/KeyManager");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Coloque API Key".green,
        validate: isRequired,
      },
    ]);
    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("Api key successfully set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log("Current API KEY: ", key.bold.yellow);
    } catch (err) {
      console.error(err.message.red);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log("key removed!".blue);
    } catch (err) {
      console.error(err.message.red);
    }
  },
};

module.exports = key;

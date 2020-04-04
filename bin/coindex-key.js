const program = require("commander");
const key = require("../commands/key");

program
  .command("set")
  .description("Set Api Key -- https://nomics.com")
  .action(key.set);

program.command("show").description("Show API Key").action(key.show);
program.command("remove").description("Remove Api Key").action(key.remove);

program.parse(process.argv);

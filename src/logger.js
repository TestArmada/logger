import { argv } from "yargs";
import util from "util";
import clc from "cli-color";

const debug = argv.debug;

const PREFIX = "Testarmada";

export default {
  prefix: PREFIX,
  output: console,

  debug(...msg) {
    /* istanbul ignore if */
    if (debug) {
      const deb = clc.blueBright("[DEBUG]");
      this.output.log(util.format("%s [%s] %s", deb, this.prefix, msg));
    }
  },

  log(...msg) {
    const info = clc.greenBright("[INFO]");
    this.output.log(util.format("%s [%s] %s", info, this.prefix, msg));
  },

  warn(...msg) {
    const warn = clc.yellowBright("[WARN]");
    this.output.warn(util.format("%s [%s] %s", warn, this.prefix, msg));
  },

  err(...msg) {
    const err = clc.redBright("[ERROR]");
    this.output.error(util.format("%s [%s] %s", err, this.prefix, msg));
  },

  loghelp(...msg) {
    this.output.log(util.format("%s", msg));
  }
};

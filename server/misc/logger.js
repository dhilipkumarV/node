import winston, {format} from 'winston';
import {argv} from 'yargs';

function clearConsoles() {
  const noop = () => {};
  console.log = noop;
  console.info = noop;
  console.error = noop;
  console.trace = noop;
}

const {combine, timestamp, json, label} = format;
const {logLevel = 'info'} = argv;

const formators = [timestamp(), label({label: '(crimson app)'}), json()];
const logger = winston.createLogger({
  level: logLevel,
  transports: [new winston.transports.Console()],
  format: combine(...formators),
});
logger.silly('Logger configured');

clearConsoles();
export default logger;

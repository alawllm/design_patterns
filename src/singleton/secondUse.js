import logger from "./singleton.js";

export default function logFirstImplementation() {
  logger.printLogCount();
  logger.log("First file");
  logger.printLogCount();
}

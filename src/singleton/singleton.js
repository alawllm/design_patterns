// only one instance of the class possible
// only one type of the object can be instantiated at the time

// race condition - a situation in which two or more threads or processes are reading or writing some shared data
// and the final result depends on the timing of how the threads are scheduled

class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
      console.log(FancyLogger.instance);
    }
    return FancyLogger.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Fancy: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

// actual instance of the class
const logger = new FancyLogger();
// prevent the instance from being changed
Object.freeze(logger);

export default logger;
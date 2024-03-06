import EventEmitter from 'events';
import { appendText } from './fileService.js';

class LoggerEmitter extends EventEmitter{};

const loggerEmitter = new LoggerEmitter(); // create object from LoggerEmitter class

loggerEmitter.on('log', (message) => {
    const currentDateAndTime = new Date().toLocaleString();
    appendText('logs.txt', 
    `
    -----------------------------------------------
    ${message}
    Date and time: ${currentDateAndTime}
    -----------------------------------------------
    `
    )
});

export default loggerEmitter;
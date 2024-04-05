import rTracer from "cls-rtracer";
import {
    addColors,
    createLogger,
    format,
    Logger,
    LoggerOptions,
    transports
} from "winston";

const { splat, json, timestamp, align, printf } = format;

const config = {
    levels: {
        error: 0,
        debug: 1,
        warn: 2,
        data: 3,
        info: 4,
        verbose: 5,
        silly: 6,
        custom: 7
    },
    colors: {
        error: "red",
        debug: "blue",
        warn: "yellow",
        data: "grey",
        info: "green",
        verbose: "cyan",
        silly: "magenta",
        custom: "yellow"
    }
};

const logFormat = printf(info => {
    const rid = rTracer.id();
    return JSON.stringify({
        timestamp: info.timestamp,
        context: info.context,
        level: info.level,
        requestId: rid,
        userId: info.userId,
        query: info.query,
        variables: info.variables,
        code: info.code,
        path: info.path,
        stacktrace: info.stacktrace,
        message: info.message ? info.message : undefined
    });
});

const loggerOptions: LoggerOptions = {
    format: format.combine(
        json(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        align(),
        splat(),
        logFormat
    ),
    transports: [
        new transports.Console({
            level: "debug",
            handleExceptions: true
        })
    ],
    exitOnError: false
};

addColors(config.colors);

function createAppLogger(): Logger {
    return createLogger(loggerOptions);
}

const logger: Logger = createAppLogger();

const errorStream = {
    write: (message: unknown): void => {
        createLogger(loggerOptions).error(message);
    }
};

export { errorStream, logger, loggerOptions };

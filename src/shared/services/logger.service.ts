import { logger } from "@src/config/modules/winston";
import { Service } from "typedi";
import { Logger } from "winston";

@Service()
export class LoggerService {
    private readonly logger: Logger;

    constructor() {
        this.logger = logger;
    }

    info(message: string, meta?: Record<string, any>) {
        // const requestId = rTracer.id();
        // if (requestId && meta) meta.requestId = requestId;
        this.logger.info({ message, meta });
    }

    error(message: string, meta?: Record<string, any>) {
        // const requestId = rTracer.id();
        // if (requestId && meta) meta.requestId = requestId;
        this.logger.error({ message, meta });
    }

    log(level: string, message: string, meta?: Record<string, any>) {
        // const requestId = rTracer.id();
        // if (requestId && meta) meta.requestId = requestId;
        this.logger.log(level, message, { meta });
    }

    warn(message: string, meta?: Record<string, any>) {
        // const requestId = rTracer.id();
        // if (requestId && meta) meta.requestId = requestId;
        this.logger.warn({ message, meta });
    }

    errorStream = {
        write: (message: string): void => {
            this.error(message);
        }
    };
}

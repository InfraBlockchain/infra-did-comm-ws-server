/* eslint-disable @typescript-eslint/no-empty-function */
import { config as _config } from "dotenv";
_config({ path: __dirname + "/../../.env" });
(process as any).send = process.send || function () {};

import JwtModuleConfig from "./modules/jwt";

export { JwtModuleConfig };

export const config = {
    // Base
    isProduction: process.env.NODE_ENV === "production",
    // General
    appName: process.env.APP_NAME || "infra-did-comm-ws-server",
    appTitle: process.env.APP_TITLE || "infra-did-comm-ws-server",
    appDescription:
        process.env.APP_DESCRIPTION ||
        "Websocket server for Infra DID communication",
    // Server
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT) || 8000,
    rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX) || 10000
};

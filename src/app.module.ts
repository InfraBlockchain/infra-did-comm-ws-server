import { LoggingInterceptor } from "@common/interceptors/logging.interceptor";
import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";

import { BadRequestExceptionFilter } from "./common/filters/bad-request-exception.filter";
import { TemplateModule } from "./modules/template/template.module";

@Module({
    imports: [TemplateModule],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        },
        {
            provide: APP_FILTER,
            useClass: BadRequestExceptionFilter
        }
    ]
})
export class AppModule {
    constructor() {}
}

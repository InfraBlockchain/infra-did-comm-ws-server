import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { JwtModule } from "@src/shared/modules";

import { TemplateController } from "./app/template.controller";
import { TemplateService } from "./app/template.service";
import { CommandHandlers } from "./domain/commands/handlers";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [CqrsModule, JwtModule],
    providers: [
        { provide: "TemplateService", useClass: TemplateService },
        ...CommandHandlers,
        ...QueryHandlers
    ],
    controllers: [TemplateController]
})
export class TemplateModule {
    configure(consumer: MiddlewareConsumer) {
        const {} = consumer;
    }
}

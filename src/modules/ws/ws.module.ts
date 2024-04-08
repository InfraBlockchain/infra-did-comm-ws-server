import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { JwtModule } from "@src/shared/modules";

import { WsGateway } from "./app/ws.gateway";
import { CommandHandlers } from "./domain/commands/handlers";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [CqrsModule, JwtModule],
    providers: [WsGateway, ...CommandHandlers, ...QueryHandlers],
    controllers: []
})
export class WsModule {
    configure(consumer: MiddlewareConsumer) {
        const {} = consumer;
    }
}

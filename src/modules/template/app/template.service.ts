import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import { HealthCheckQuery } from "../domain/queries/impl";

@Injectable()
export class TemplateService {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    public async healthCheck(): Promise<any> {
        try {
            const result = await this.queryBus.execute(new HealthCheckQuery());
            return result;
        } catch (error) {
            throw error;
        }
    }
}

import { Controller, Get, HttpCode, Inject } from "@nestjs/common";

import { TemplateService } from "./template.service";

@Controller("template")
export class TemplateController {
    constructor(
        @Inject("TemplateService") private readonly service: TemplateService
    ) {}

    @Get()
    @HttpCode(200)
    async healthCheck(): Promise<any> {
        try {
            const result = await this.service.healthCheck();
            return result;
        } catch (error) {
            throw error;
        }
    }
}

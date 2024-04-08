import { Controller, Get, HttpCode } from "@nestjs/common";

import { ResultResponseDto } from "./shared/dtos";

@Controller("")
export class AppController {
    constructor() {}

    @Get()
    @HttpCode(200)
    async healthCheck(): Promise<any> {
        try {
            const result = ResultResponseDto.of({ result: "OK" });
            return result;
        } catch (error) {
            throw error;
        }
    }
}

/* eslint-disable max-nested-callbacks */
import { Test, TestingModule } from "@nestjs/testing";

import { TemplateController } from "./template.controller";
import { TemplateService } from "./template.service";

const mockTemplateService: Partial<TemplateService> = {
    healthCheck: jest.fn()
};

describe("TemplateController", () => {
    let templateController: TemplateController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                { provide: "TemplateService", useValue: mockTemplateService }
            ],
            controllers: [TemplateController]
        }).compile();

        templateController = module.get<TemplateController>(TemplateController);
    });

    describe("GET /", () => {
        it("should return healthCheck", async () => {
            const resp = "HealthCheck :)";

            jest.spyOn(mockTemplateService, "healthCheck").mockImplementation(
                () => Promise.resolve(resp)
            );

            expect(await templateController.healthCheck()).toBe(resp);
        });
    });
});

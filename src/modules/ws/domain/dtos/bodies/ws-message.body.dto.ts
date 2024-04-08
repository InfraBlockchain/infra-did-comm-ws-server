import { IsString } from "class-validator";

export class WsMessageBodyDto {
    @IsString({ message: "to must be a string" })
    readonly to: string;

    @IsString({ message: "m must be a JWE string" })
    readonly m: string;

    public static of(params: Partial<WsMessageBodyDto>): WsMessageBodyDto {
        const dto = new WsMessageBodyDto();
        Object.assign(dto, params);
        return dto;
    }
}

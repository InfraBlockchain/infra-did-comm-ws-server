import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import { logger } from "@src/config/modules/winston";
import { Server, Socket } from "socket.io";

import { WsMessageBodyDto } from "../domain/dtos";

@WebSocketGateway()
export class WsGateway {
    constructor() {}

    @WebSocketServer() public server: Server;

    handleConnection(@ConnectedSocket() client: Socket): any {
        logger.info(`connected: ${client.id}`);
        client.emit("connection", { to: client.id, m: "connected" });
    }

    handleDisconnect(@ConnectedSocket() client: Socket) {
        logger.info(`disconnected: ${client.id}`);
    }

    @SubscribeMessage("echo")
    handleEcho(
        @MessageBody() data: string,
        @ConnectedSocket() client: Socket
    ): void {
        client.emit("echo", data);
    }

    @SubscribeMessage("message")
    handleMessage(@MessageBody() data: WsMessageBodyDto): WsMessageBodyDto {
        const { to, m } = data;
        this.server.to(to).emit("message", m);
        return data;
    }
}

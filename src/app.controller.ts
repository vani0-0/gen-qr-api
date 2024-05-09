import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('generate')
    async generateQR(@Body() body: { text: string }) {
        return await this.appService.generateQR(body.text);
    }
}

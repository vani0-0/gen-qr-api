import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}
    @Post('generate')
    async generateQR(@Body() body: { text: string }) {
        return await this.appService.generateQR(body.text);
    }
}

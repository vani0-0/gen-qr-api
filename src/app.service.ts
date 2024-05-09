import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    async generateQR(text: string) {
        try {
            const qr = await QRCode.toDataURL(text);
            return qr;
        } catch (err) {
            console.log(err);
        }
    }
}

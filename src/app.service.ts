import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';

@Injectable()
export class AppService {
    async generateQR(text: string) {
        try {
            return await QRCode.toDataURL(text);
        } catch (err) {
            console.log(err);
        }
    }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GenqrService } from './genqr/genqr.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, GenqrService],
})
export class AppModule {}

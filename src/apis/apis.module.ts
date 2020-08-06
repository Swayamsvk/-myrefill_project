import { Module, HttpModule } from '@nestjs/common';
import { ApisController } from './apis.controller';
import { ApisService } from './apis.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RateEntity } from './apis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RateEntity]), HttpModule],
  controllers: [ApisController],
  providers: [ApisService],
})
export class ApisModule {}

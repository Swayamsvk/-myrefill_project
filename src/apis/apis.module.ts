import { Module, HttpModule } from '@nestjs/common';

import { ApisController } from './apis.controller';

@Module({
  controllers: [ApisController, HttpModule],
})
export class ApisModule {}

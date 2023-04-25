import { Module } from '@nestjs/common';
import { RosConnectionService } from './ros-connection.service';
import { RosConnectionController } from './ros-connection.controller';

@Module({
  providers: [RosConnectionService],
  controllers: [RosConnectionController],
})
export class RosConnectionModule {}

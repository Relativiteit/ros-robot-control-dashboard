import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RosConnectionModule } from './ros-connection/ros-connection.module';
import { RosConnectionController } from './ros-connection/ros-connection.controller';
import { RosConnectionService } from './ros-connection/ros-connection.service';

@Module({
  imports: [RosConnectionModule],
  controllers: [AppController, RosConnectionController],
  providers: [AppService, RosConnectionService],
})
export class AppModule {}

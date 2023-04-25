import { Controller, Post } from '@nestjs/common';

@Controller('api')
export class RosConnectionController {
  @Post('connect')
  async getRosConnection(): Promise<any> {
    return {
      status: `Connected`,
      message: `Succesfully connected to the ROS system`,
    };
  }
}

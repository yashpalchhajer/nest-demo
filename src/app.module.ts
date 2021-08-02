import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ PostModule, ConfigModule.forRoot({
    isGlobal: true
  }) ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

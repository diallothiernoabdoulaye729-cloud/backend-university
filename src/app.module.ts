import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { ConfigModule } from 'node_modules/@nestjs/config/dist/config.module';

@Module({
  imports: [ConfigModule.forRoot(), StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

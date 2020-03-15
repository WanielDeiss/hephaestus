import { Module } from '@nestjs/common';
// import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TerminusOptionsService } from './terminus-options.service';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    // TerminusModule.forRootAsync({
    //   useClass: TerminusOptionsService,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

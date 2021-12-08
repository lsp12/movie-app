import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ActorsModule } from './actors/actors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE, HOST, PASSWORD, PORT, USERNAME } from './config/constant';
import { MoviesActorsCagetoryModule } from './movies-cagetory/movies-actors-cagetory.module';
import { CagetoryModule } from './cagetory/cagetory.module';
import { ActMovieModule } from './act-movie/act-movie.module';

@Module({
  imports: [
    MoviesModule,
    MoviesActorsCagetoryModule,
    CagetoryModule,
    ActorsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: HOST || process.env.HOST,
      port: PORT || parseInt(process.env.PORT),
      username: USERNAME || process.env.USERNAME,
      password: PASSWORD || process.env.PASSWORD,
      database: DATABASE || process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ActMovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

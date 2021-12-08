import { Module } from '@nestjs/common';
import { ActMovieService } from './act-movie.service';
import { ActMovieController } from './act-movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActMovie } from './entities/act-movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActMovie])],
  controllers: [ActMovieController],
  providers: [ActMovieService],
})
export class ActMovieModule {}

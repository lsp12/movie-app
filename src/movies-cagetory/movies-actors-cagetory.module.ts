import { Module } from '@nestjs/common';
import { MoviesActorsCagetoryService } from './movies-actors-cagetory.service';
import { MoviesActorsCagetoryController } from './movies-actors-cagetory.controller';
import { MoviesActorsCagetory } from './entities/movies-actors-cagetory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MoviesActorsCagetory])],
  controllers: [MoviesActorsCagetoryController],
  providers: [MoviesActorsCagetoryService],
})
export class MoviesActorsCagetoryModule {}

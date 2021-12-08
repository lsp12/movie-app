import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateMoviesActorsCagetoryDto } from './dto/create-movies-actors-cagetory.dto';
import { UpdateMoviesActorsCagetoryDto } from './dto/update-movies-actors-cagetory.dto';
import { MoviesActorsCagetory } from './entities/movies-actors-cagetory.entity';
import { ImacResponse } from './Interface/mac.interface';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const safeJsonStringify = require('safe-json-stringify');

@Injectable()
export class MoviesActorsCagetoryService {
  constructor(
    @InjectRepository(MoviesActorsCagetory)
    public categoryRepository: Repository<MoviesActorsCagetory>,
  ) {}

  async create(
    createMoviesActorsCagetoryDto: CreateMoviesActorsCagetoryDto,
  ): Promise<ImacResponse> {
    try {
      let cont = 0;
      createMoviesActorsCagetoryDto.category.map((item) => {
        const res = this.categoryRepository.insert({
          movie: createMoviesActorsCagetoryDto.movie,
          cagetory: item,
        });
        cont++;
      });
      return {
        res: cont,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async findAll(): Promise<ImacResponse> {
    try {
      const res = await this.categoryRepository.find({
        relations: ['movie', 'cagetory'],
      });
      console.log(res);
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async update(
    id: number,
    updateMoviesActorsCagetoryDto: UpdateMoviesActorsCagetoryDto,
  ): Promise<ImacResponse> {
    try {
      const res = await this.categoryRepository.update(
        id,
        updateMoviesActorsCagetoryDto,
      );
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async remove(id: number): Promise<ImacResponse> {
    try {
      const res = await this.categoryRepository.delete(id);
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async findOne(id: number): Promise<ImacResponse> {
    try {
      const res = await this.categoryRepository.findOne(id);
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async findByMovie(id: number): Promise<ImacResponse> {
    try {
      const res = await this.categoryRepository.find({
        join: {
          alias: 'movies_actors_cagetory',
          leftJoinAndSelect: { category: 'movies_actors_cagetory.cagetory' },
        },
        where: {
          movie: id,
        },
      });
      return {
        res,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }

  async findByCagetory(id: number): Promise<ImacResponse> {
    try {
      const res: SelectQueryBuilder<any> = this.categoryRepository
        .createQueryBuilder('movies_actors_cagetory')
        .select('movies_actors_cagetory.movie', 'movie')
        .innerJoinAndSelect('movies_actors_cagetory.movie', 'movie')
        .innerJoinAndSelect('movies_actors_cagetory.cagetory', 'cagetory')
        .where('movies_actors_cagetory.cagetory = :id', { id })
        .groupBy('movies_actors_cagetory.movieId');

      const res2 = await res.getRawMany();
      const res3 = safeJsonStringify(res2);
      const res4 = JSON.parse(res3);

      return {
        res: res4,
        error: null,
      };
    } catch (error) {
      return {
        res: null,
        error,
      };
    }
  }
}

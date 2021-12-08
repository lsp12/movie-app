import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CreateActMovieDto } from './dto/create-act-movie.dto';
import { UpdateActMovieDto } from './dto/update-act-movie.dto';
import { ActMovie } from './entities/act-movie.entity';
import { IactmovieResponse } from './Interface/actmovie.interface';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const safeJsonStringify = require('safe-json-stringify');

@Injectable()
export class ActMovieService {
  constructor(
    @InjectRepository(ActMovie)
    public categoryRepository: Repository<ActMovie>,
  ) {}

  async create(
    createActMovieDto: CreateActMovieDto,
  ): Promise<IactmovieResponse> {
    try {
      let cont = 0;
      createActMovieDto.actor.map(async (item) => {
        const res = await this.categoryRepository.insert({
          movie: createActMovieDto.movie,
          actor: item,
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

  async findAll(): Promise<IactmovieResponse> {
    try {
      const res = await this.categoryRepository.find();
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

  async findOne(id: number): Promise<IactmovieResponse> {
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

  async update(
    id: number,
    updateActMovieDto: UpdateActMovieDto,
  ): Promise<IactmovieResponse> {
    try {
      let cont = 0;
      updateActMovieDto.actor.map(async (item) => {
        const res = await this.categoryRepository.create({
          movie: updateActMovieDto.movie,
          actor: item,
        });
        const update = await this.categoryRepository.update(id, res);
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

  async delete(id: number): Promise<IactmovieResponse> {
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

  async findByMovie(id: number): Promise<IactmovieResponse> {
    try {
      const res = await this.categoryRepository.find({
        join: {
          alias: 'actmovie',
          leftJoinAndSelect: { actor: 'actmovie.actor' },
        },
        where: { movie: id },
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

  async findByActor(id: number): Promise<IactmovieResponse> {
    try {
      const res: SelectQueryBuilder<any> = await this.categoryRepository
        .createQueryBuilder('actmovie')
        .leftJoinAndSelect('actmovie.movie', 'movie')
        .leftJoinAndSelect('actmovie.actor', 'actor')
        .where('actmovie.actor = :id', { id });
      const result = await res.getMany();
      const result2 = safeJsonStringify(result);
      const result3 = JSON.parse(result2);
      return {
        res: result3,
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

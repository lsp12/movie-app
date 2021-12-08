import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { ImoviesResponse } from './Interface/movies.interface';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    public userRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<ImoviesResponse> {
    try {
      createMovieDto.created_at = new Date();
      createMovieDto.updated_at = new Date();
      const res = await this.userRepository.save(createMovieDto);
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

  async findAll(): Promise<ImoviesResponse> {
    try {
      const res = await this.userRepository.find();
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

  async findOne(id: number): Promise<ImoviesResponse> {
    try {
      const res = await this.userRepository.findOne(id);
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
    updateMovieDto: UpdateMovieDto,
  ): Promise<ImoviesResponse> {
    try {
      const res = await this.userRepository.update(id, {
        title: updateMovieDto.title,
        description: updateMovieDto.description,
        duration: updateMovieDto.duration,
        image_url: updateMovieDto.image_url,
        updated_at: new Date(),
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

  async remove(id: number): Promise<ImoviesResponse> {
    try {
      const res = await this.userRepository.delete(id);
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
}

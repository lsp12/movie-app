import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './entities/actor.entity';
import { IActorsResponse } from './Interface/actors.interface';

@Injectable()
export class ActorsService {
  constructor(
    @InjectRepository(Actor)
    public userRepository: Repository<Actor>,
  ) {}

  async create(createActorDto: CreateActorDto): Promise<IActorsResponse> {
    try {
      const res = await this.userRepository.save(createActorDto);
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

  async findAll(): Promise<IActorsResponse> {
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

  async findOne(id: number): Promise<IActorsResponse> {
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

  async update(id: number, updateActorDto: UpdateActorDto) {
    try {
      const res = await this.userRepository.update(id, updateActorDto);
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

  async remove(id: number): Promise<IActorsResponse> {
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

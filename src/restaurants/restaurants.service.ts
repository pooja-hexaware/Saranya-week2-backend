import { Injectable } from '@nestjs/common';
import { Restaurant } from './entities/restaurants.entity';
import { restaurantsRepo } from './restaurants.repository';

@Injectable()
export class restaurantsService {
    constructor(
        private readonly restaurantsRepo: restaurantsRepo
    ) { }

    async findAll(): Promise<Restaurant[]> {

        return this.restaurantsRepo.findAll();
    }

    async create(data): Promise<Restaurant> {
        data.createddate = new Date();
        return this.restaurantsRepo.create(data);
    }

    async update(restaurantsId, data): Promise<Restaurant> {
        return this.restaurantsRepo.update(restaurantsId, data);
    }

    async delete(restaurantsId): Promise<Restaurant> {
        return this.restaurantsRepo.delete(restaurantsId);
    }
}
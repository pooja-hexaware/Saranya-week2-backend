import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from './entities/restaurants.entity';

@Injectable()
export class restaurantsRepo {
    constructor(
        @InjectModel(Restaurant.name)
        private readonly restaurantsModel: Model<RestaurantDocument>) {}

    async create(data): Promise<Restaurant> {
        return new this.restaurantsModel(data).save();
    }

    async findAll(): Promise<Restaurant[]> {
        return this.restaurantsModel.find({})
            .exec();
    }

    async update(restaurantsId, data): Promise<Restaurant> {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findOneAndUpdate(filter, data);
    }

    async delete(restaurantsId): Promise<Restaurant> {
        const filter = { _id: restaurantsId };
        return this.restaurantsModel.findByIdAndDelete(restaurantsId);
    }
}
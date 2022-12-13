import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Restaurant, RestaurantSchema } from './entities/restaurants.entity';
import { restaurantsController } from './restaurants.controller';
import { restaurantsRepo } from './restaurants.repository';
import { restaurantsService } from './restaurants.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Restaurant.name, schema: RestaurantSchema }])
    ],
    controllers: [restaurantsController],
    providers: [restaurantsService, restaurantsRepo],
    exports: [restaurantsService, restaurantsRepo]
  })
  export class restaurantsModule { }
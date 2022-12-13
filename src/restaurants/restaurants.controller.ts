import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Restaurant } from './entities/restaurants.entity';
import { restaurantsService } from './restaurants.service';


@Controller('restaurants')
export class restaurantsController {
    constructor(private readonly restaurantsService: restaurantsService) { }

    @Post()
    async create(@Res() res ,@Body() RestaurantObject :Restaurant) {
        const result = this.restaurantsService.create(RestaurantObject );
        if(!result) return null;
        return res.status(HttpStatus.CREATED).json(result);
    }

    @Get()
    async findAll() {
        return this.restaurantsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() RestaurantObject :Restaurant ) {
        return this.restaurantsService.update(id,RestaurantObject );
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.restaurantsService.delete(id);
    }
}
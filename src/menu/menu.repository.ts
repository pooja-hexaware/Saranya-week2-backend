import { Injectable } from "@nestjs/common";
import {Model} from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Menu,MenuDocument } from "./entities/menu.entity";
import { INQUIRER } from "@nestjs/core";

@Injectable()
export class menuRepo{
    constructor(
        @InjectModel(Menu.name)
        private readonly menuModel: Model<MenuDocument>,
    ) { }
    async create(data){
        return new this.menuModel(data).save();
    }

    async findAll() {
        return this.menuModel.find({}).exec();
    }

    async findOne(id){
        const filter = { _id: id };
        return this.menuModel.findOne(filter).exec();
    }

    async update(id,data){
        const filter = { _id: id };
        return this.menuModel.findOneAndUpdate(filter,data).exec();
    }

    async delete(id){
        return this.menuModel.findByIdAndDelete(id);
    }
}
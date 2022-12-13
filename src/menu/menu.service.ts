import { Injectable } from '@nestjs/common';
import { Menu } from './entities/menu.entity';
import { menuRepo } from './menu.repository';

@Injectable()
export class MenuService {

  constructor(
    private readonly MenuRepo: menuRepo
) { }


  create(MenuObject:Menu) {
    return this.MenuRepo.create(MenuObject);
  }

  async findAll() :Promise<Menu[]>{
    return this.MenuRepo.findAll();
  }

  async findOne(id: string) {
    return this.MenuRepo.findOne(id);
  }

  async update(id:string,updateMenuObject:Menu) {
    return this.MenuRepo.update(id,updateMenuObject);
  }

  async remove(id:string) {
    return this.MenuRepo.delete(id);
  }
}


import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('add')
  async create(@Body() createMenuDto: CreateMenuDto) {
    try{
      await this.menuService.create(createMenuDto);
      return{
        success:true,
        message:'Menu Added Succesfully',
      };
    } catch(error){
      return{
        success:false,
        message:error.message,
      };
    }
  }

  @Get('see')
  async findAll() {
    try {
      const menus = await this.menuService.findAll();
      return {
        success: true,
        data: menus,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get('see/:id')
  async findOne(@Param('id') id: string) {
    try {
      const menu = await this.menuService.findOne(+id);
      if (menu) {
        return {
          success: true,
          data: menu,
        };
      } else {
        return {
          success: false,
          message: 'Menu not found',
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') menuId: string) {
    return this.menuService.remove(+menuId);
  }
}

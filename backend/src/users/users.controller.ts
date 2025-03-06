import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  createUser(@Body() body: { name: string; email: string; password: string, address: number, phone: number }) {
    return this.usersService.createUser(body.name, body.email, body.password, body.address, body.phone);
  }

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }
}

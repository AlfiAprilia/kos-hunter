import {
  Body, Controller, Delete,
  Get, Param, Patch, Post,
} from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
constructor(private readonly usersService: UsersService) {}
    @Post('register')
    register(@Body() body) {
        return this.usersService.register(body);
}

    @Post('login')
    async login(@Body() body) {
        const user = await this.usersService.findByEmail(body.email);

    if (!user || user.password !== body.password) {
    return { message: 'Login gagal' };
  }

    return { message: 'Login berhasil', user };
}
}

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(await this.authService.validateUser(body.email, body.password));
  }

  @Post('signup')
  async signup(@Body() body: { name: string; email: string; password: string }) {
    return this.authService.signup(body.name, body.email, body.password);
  }
}

import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

/** global prefix route */
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup() {
        return this.authService.signUp();
    }
    @Post('signin')
    signin() {
        return this.authService.sigIn();
    }
}
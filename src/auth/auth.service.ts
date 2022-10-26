import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {

    signUp(){
        return 'I am signing up';
    }

    sigIn(){
        return 'I am Signed in.'
    }
}
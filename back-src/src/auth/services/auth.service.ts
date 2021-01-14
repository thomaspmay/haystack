import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable, from, of } from 'rxjs';
import { User } from '../../../../models/interfaces/user.interface';
const argon2 = require('argon2');

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService){}

    generateJWT(user: User): Observable <string> {
        return from(this.jwtService.signAsync({user}));
    }

    hashPassword(password: string): Observable <string> {
        return from<string>(argon2.hash(password, 12));

    }

    comparePasswords(newPassword: string, passwortHash: string): Observable<any>{
        return from(argon2.compare(newPassword, passwortHash));
    }

}

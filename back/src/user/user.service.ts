import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { UserEntity } from 'src/entities/user.entity';
import { CreateUserDTO } from 'src/entities/userModels';
import { Repository } from 'typeorm';

@Injectable()
export class userService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
    ){}

    create(user: CreateUserDTO): Observable<UserEntity> {

        let userEntity: UserEntity = new UserEntity()
        return from(this.userRepository.save(userEntity));
    }

    findAll(): Observable<UserEntity[]> {
        return from(this.userRepository.find());
    }

    deleteUser(id: number): Observable<any> {
        return from(this.userRepository.delete(id));
    }

    updateOne(id: number, user: CreateUserDTO): Observable<any> {
        let userEntity: UserEntity = new UserEntity()
        return from(this.userRepository.update(id,userEntity));
    }
}


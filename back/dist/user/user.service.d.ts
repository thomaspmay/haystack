import { Observable } from 'rxjs';
import { UserEntity } from 'src/entities/user.entity';
import { CreateUserDTO } from 'src/entities/userModels';
import { Repository } from 'typeorm';
export declare class userService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(user: CreateUserDTO): Observable<UserEntity>;
    findAll(): Observable<UserEntity[]>;
    deleteUser(id: number): Observable<any>;
    updateOne(id: number, user: CreateUserDTO): Observable<any>;
}

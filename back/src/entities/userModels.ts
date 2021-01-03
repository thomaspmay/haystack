import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}

export class CreateUserDto {
    @ApiProperty() 
    readonly id: number;

    @ApiProperty()
    readonly firstName: string;

    @ApiProperty()
    readonly lastName: string;

    @ApiProperty()
    readonly email: string;

    @ApiProperty()
    readonly password: string;
}


// now defined in proto file
// export class User {
//     id: number;
//     email: string;
//     firstName: string;
//     lastName: string;
// }


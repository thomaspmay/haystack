import { Controller, Post, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDTO } from 'src/entities/userModels';

@Controller('users')
export class UserController {

    constructor(private UserService){

    }

    @Post()
    create(@Body() user: CreateUserDTO): Observable<User | Object> {
        return this.userService.create(user).pipe(
            map((user: User) => user),
            catchError(err => of({ error: err.message }))
        );
    }

    @Post('login')
    login(@Body() user: User): Observable<Object> {
        return this.userService.login(user).pipe(
            map((jwt: string) => {
                return { access_token: jwt };
            })
        )
    }

    @Get(':id')
    findOne(@Param() params): Observable<User> {
        return this.userService.findOne(params.id);
    }


    // @Get()
    // index(
    //     @Query('page') page: number = 1,
    //     @Query('limit') limit: number = 10,
    //     @Query('username') username: string
    // ): Observable<Pagination<User>> {
    //     limit = limit > 100 ? 100 : limit;

    //     if (username === null || username === undefined) {
    //         return this.userService.paginate({ page: Number(page), limit: Number(limit), route: 'http://localhost:3000/api/users' });
    //     } else {
    //         return this.userService.paginateFilterByUsername(
    //             { page: Number(page), limit: Number(limit), route: 'http://localhost:3000/api/users' },
    //             { username }
    //         )
    //     }
    // }

    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Delete(':id')
    deleteOne(@Param('id') id: string): Observable<any> {
        return this.userService.deleteOne(Number(id));
    }

    @UseGuards(JwtAuthGuard, UserIsUserGuard)
    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: User): Observable<any> {
        return this.userService.updateOne(Number(id), user);
    }

    @hasRoles(UserRole.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Put(':id/role')
    updateRoleOfUser(@Param('id') id: string, @Body() user: User): Observable<User> {
        return this.userService.updateRoleOfUser(Number(id), user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file, @Request() req): Observable<Object> {
        const user: User = req.user;

        return this.userService.updateOne(user.id, {profileImage: file.filename}).pipe(
            tap((user: User) => console.log(user)),
            map((user:User) => ({profileImage: user.profileImage}))
        )
    }

    @Get('profile-image/:imagename')
    findProfileImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
        return of(res.sendFile(join(process.cwd(), 'uploads/profileimages/' + imagename)));
    }
}

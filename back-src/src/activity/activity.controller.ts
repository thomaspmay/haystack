import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path, { join } from 'path';
import { Observable, of } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard';
import { UserIsAuthorGuard } from 'src/auth/guards/user-is-author.guard';
import { Iactivity } from '../../../models/interfaces/activity.interface';
import { ActivityService } from './activity.service';
import { ActivityEntity } from '../../../models/entities/activity.entity';

export const storage = {
    storage: diskStorage({
        destination: './uploads/activity-images',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })

}

@Controller('activity')
export class ActivityController {
    
    constructor(private activityService: ActivityService) {}

    

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body()activity: Iactivity, @Request() req): Observable<Iactivity> {
        const user = req.user;
        return this.activityService.create(user, activity);
    }

    // @Get()
    // findBlogEntries(@Query('userId') userId: number): Observable<BlogEntry[]> {
    //     if(userId == null) {
    //         return this.blogService.findAll();
    //     } else {
    //         return this.blogService.findByUser(userId);
    //     }
    // }

    // @Get('')
    // index(
    //     @Query('page') page: number = 1,
    //     @Query('limit') limit: number = 10
    // ) {
    //     limit = limit > 100 ? 100 : limit;
        

    //     return this.activityService.paginateAll({
    //         limit: Number(limit),
    //         page: Number(page),
    //         route: BLOG_ENTRIES_URL
    //     })
    // }

    @Get('university/:university')
    indexByUser(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 20,
        @Param('university') universityId: number
    ) {
        limit = limit > 100 ? 100 : limit;

        return this.activityService.paginateByUser({
            limit: Number(limit),
            page: Number(page),
            route: BLOG_ENTRIES_URL + '/user/' + userId 
        }, Number(userId))
    }

    @Get(':id')
    findOne(@Param('id') id: number): Observable<Iactivity> {
        return this.activityService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, UserIsAuthorGuard)
    @Put(':id')
    updateOne(@Param('id') id: number, @Body() activity: Iactivity): Observable<Iactivity> {
        return this.activityService.updateOne(Number(id), activity);
    }

    @UseGuards(JwtAuthGuard, UserIsAuthorGuard)
    @Delete(':id')
    deleteOne(@Param('id') id: number): Observable<any> {
        return this.activityService.deleteOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('image/upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file, @Request() req): Observable<Image> {
        return of(file);
    }

    @Get('image/:imagename')
    findImage(@Param('imagename') imagename, @Res() res): Observable<Object> {
        return of(res.sendFile(join(process.cwd(), 'uploads/activites-images/' + imagename)));
    } 
}

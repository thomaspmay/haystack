import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActivityEntity } from 'src/models/entities/activity.entity';
import { Activity } from 'src/models/interfaces/activity.interface';
import { user } from 'src/models/interfaces/user.interface';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityService {

    constructor(
        @InjectRepository(ActivityEntity) private readonly activityRepository: Repository<ActivityEntity>,
        private userService: UserService
    ) {}


    create(user: user, activity: Activity): Observable<Activity> {
        activity.author = user;
        console.log(activity);
        return this.generateSlug(activity.title).pipe(
            switchMap((slug: string) => {
                activity.slug = slug;
                return from(this.activityRepository.save(activity));
            })
        )
    }

    findAll(): Observable<Activity[]> {
        return from(this.activityRepository.find({relations: ['author']}));
    }

    // paginateAll(options: IPaginationOptions): Observable<Pagination<BlogEntry>> {
    //     return from(paginate<BlogEntry>(this.blogRepository, options, {
    //         relations: ['author']
    //     })).pipe(
    //         map((blogEntries: Pagination<BlogEntry>) => blogEntries)
    //     )
    // }

    // paginateByUser(options: IPaginationOptions, userId: number): Observable<Pagination<BlogEntry>> {
    //     return from(paginate<BlogEntry>(this.blogRepository, options, {
    //         relations: ['author'],
    //         where: [
    //             {author: userId}
    //         ]
    //     })).pipe(
    //         map((blogEntries: Pagination<BlogEntry>) => blogEntries)
    //     )
    // }

    findOne(id: number): Observable<Activity> {
        return from(this.activityRepository.findOne({id}, {relations: ['author']}));
    }

    findByUser(userId: number): Observable<Activity[]> {
        return from(this.activityRepository.find({
            where: {
                author: userId
            },
            relations: ['author']
        })).pipe(map((activity: Activity[]) => activity))
    }

    updateOne(id: number, activity: Activity): Observable<Activity> {
        return from(this.activityRepository.update(id, activity)).pipe(
            switchMap(() => this.findOne(id))
        )
    }

    deleteOne(id: number): Observable<any> {
        return from(this.activityRepository.delete(id));
    }

    generateSlug(title: string): Observable<string> {
        return of(slugify(title));
    }
}

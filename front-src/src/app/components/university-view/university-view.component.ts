import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { UniversityService } from 'src/app/services/university/university.service';
import { ActivityList } from '../../../../../interfaces/activityList.interface'
import { University } from '../../../../../interfaces/university.interface';


@Component({
  selector: 'app-university-view',
  templateUrl: './university-view.component.html',
  styleUrls: ['./university-view.component.scss']
})
export class UniversityViewComponent implements OnInit {

  // activityLists: ActivityList[];
  activityLists: Observable<any>;
  universityId: number;

  university$: Observable<University> = this.activatedRoute.params.pipe(
    switchMap((params: Params) => {
      this.universityId = parseInt(params['id']);
      return this.universityService.findOne(this.universityId).pipe(
        map((university: University) => university)
      )
    })
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private activityService: ActivityService,
    private universityService: UniversityService
  ) { }

  ngOnInit(): void {
    this.activityLists = this.universityService.getActivityLists(this.universityId);
  } 

}

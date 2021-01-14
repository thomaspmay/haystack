import { Injectable } from '@angular/core';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from '../../../../../interfaces/university.interface';
import { ActivityList } from '../../../../../interfaces/activityList.interface';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private http: HttpClientModule) { 
    
   }

  findOne(id: number): Observable<any> {
    return this.http.get<University>('/university/' + id);
  }

  getActivityLists(id: number): Observable<any> {
    return this.http.get<ActivityList>('/university/activity-list' + id);
  }
}

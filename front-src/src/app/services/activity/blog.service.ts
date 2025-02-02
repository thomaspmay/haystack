import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { BlogEntriesPageable, BlogEntry } from 'src/app/models/blog-entry.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<BlogEntry> {
    return this.http.get<BlogEntry>('/activity/' + id);
  }

  indexAll(page: number, limit: number): Observable<BlogEntriesPageable> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(limit));

    return this.http.get<BlogEntriesPageable>('/activity/', {params});
  }

  indexByUser(userId: number, page: number, limit: number): Observable<BlogEntriesPageable> {
    let params = new HttpParams();

    params = params.append('page', String(page));
    params = params.append('limit', String(limit));

    return this.http.get<BlogEntriesPageable>('/activity/user/' + String(userId), {params});
  }

  post(blogEntry: BlogEntry): Observable<BlogEntry> {
    return this.http.post<BlogEntry>('/activity', blogEntry);
  }

  uploadHeaderImage(formData: FormData): Observable<any> {
    return this.http.post<FormData>('/activity/image/upload', formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

}

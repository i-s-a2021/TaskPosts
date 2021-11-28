import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { PostModel } from '../model/post-model';
import {environment } from '../../environments/environment'
@Injectable()
export class PostsService {
  // constructor(private environment:) {}
  private API_URL: string = `${environment.apiUrl}/posts`;
  postData: BehaviorSubject<PostModel[]> = new BehaviorSubject<PostModel[]>([]);
  constructor(private http: HttpClient) { }

  getPost(id): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.API_URL}/${id}`);
  }

  addNewPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.API_URL, post);
  }

  getAllIssues() {
    this.http.get<PostModel[]>(this.API_URL).subscribe(data => {
      this.postData.next(data);
    });
  }

}

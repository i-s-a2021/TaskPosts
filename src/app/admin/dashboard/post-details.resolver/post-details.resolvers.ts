import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PostsService } from '../../../services/posts.service'
@Injectable()
export class PostDetailsResolver implements Resolve<any> {

  constructor(public postService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id')
    return this.postService.getPost(id).pipe(
      catchError((error) => {
        return of('No data');
      })
    )
  }
}




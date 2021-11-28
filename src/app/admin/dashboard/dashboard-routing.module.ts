import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { DetailsPostComponent } from './posts/details-post/details-post.component';
import { PostsComponent } from './posts/posts/posts.component';
import { PostDetailsResolver } from './post-details.resolver/post-details.resolvers'
const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'displayPost/:id',
  component: DetailsPostComponent,
  resolve: {
    postDetails: PostDetailsResolver
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

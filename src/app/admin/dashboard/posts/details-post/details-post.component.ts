import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostModel } from 'src/app/model/post-model';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.scss']
})
export class DetailsPostComponent implements OnInit {



  constructor(private route: ActivatedRoute) {
  }
  public postDetails: PostModel;

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log('Check route resolver data')
      console.log(data.postDetails)
      this.postDetails = data.postDetails
    })

  }
}

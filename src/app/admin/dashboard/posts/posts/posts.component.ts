import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostModel } from 'src/app/model/post-model';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<PostModel>;
  displayedColumns = ['id', 'title'];


  constructor(private postService: PostsService) {
  }


  ngOnInit(): void {
    this.postService.getAllIssues()
    this.postService.postData.subscribe((data:[]) => {
      this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
    })


  }

  applyFilter(filterValue: string) {
    console.log(filterValue)
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngDestroy() {
    this.postService.postData.unsubscribe()
  }


}




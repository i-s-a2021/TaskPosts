import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {LoaderService} from '../../../services/loader.service'
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSidebar(): void{
    console.log('toggleSidebar clicked')
    this.sideNavToggled.emit();
  }

  onLoggedout(): void{
    localStorage.removedItem('liLoggedin');
    this.router.navigate(['/']);
  }
}

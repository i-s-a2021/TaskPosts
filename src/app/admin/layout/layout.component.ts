import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;
  @ViewChild('snav') sideNav: MatSidenav;
  sideNavDefaultOpened = true;
  showFullMenu = true;
  isExpanded = true;
  closedWidth = 75;
  openedWidth = 250;
  isMobile: boolean;
  sideNavMode: 'side' | 'over' | 'side';
  toolBarHight = 64;
  isDarkTheme = false;
  loading$ = this.loader.loading$;
  private readonly mediaWatcher: Subscription;


  constructor(public media: MediaObserver, public loader: LoaderService, public cdRef: ChangeDetectorRef) {

    this.mediaWatcher = media.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        if (this.sideNavDefaultOpened) {
          this.sideNavDefaultOpened = false;
          this.isExpanded = false;
        }

        this.isMobile = true;
        this.showFullMenu = true;
        this.sideNavMode = 'over';
      } else {
        this.isMobile = false;
        this.sideNavDefaultOpened = true;
        this.sideNavMode = 'side';
      }

      if (change.mqAlias === 'xs') {
        this.toolBarHight = 56;
      } else {
        this.toolBarHight = 64;
      }
    })
  }

  ngOnInit(): void {
  }



  ngAfterViewInit(): void {
    this.sidenavContainer.scrollable.elementScrolled().subscribe((s) => {

    });
  }

  ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe()
  }


  onToolbarToggle(): void {
    if (this.isMobile) {
      if (!this.isExpanded) {
        setTimeout(() => {
          this.sideNav.toggle();
        }, 150)
      } else {
        this.sideNav.toggle();
      }
    } else {
      if (!this.isExpanded) {
        setTimeout(() => {
          this.showFullMenu = true;
        }, 150);
      } else {
        this.showFullMenu = false;
      }
    }
    this.isExpanded = !this.isExpanded;
  }
}

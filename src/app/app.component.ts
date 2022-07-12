import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild(MatSidenav)  sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.observer.observe(['{max-width: 800px}']).subscribe((res) => {

      if(screen.width < 800){
        console.log("closed")
        this.sidenav.mode = 'over'
        this.sidenav.close()
      }else{
        console.log("opened")
        this.sidenav.mode = 'side'
        this.sidenav.open()
      }

    })
  }


}

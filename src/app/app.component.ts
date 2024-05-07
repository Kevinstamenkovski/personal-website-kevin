import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'portfolio'

  @ViewChild(MatSidenav)  sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver, private route:Router) {


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
  ngOnInit(): void {
    this.route.navigate(['/profile']) //kevinstamenkovski.netlify.app
  }
  selectedComponent: string = 'Profile'
  deactiveBar(component: string): void{
    this.selectedComponent = component

    if(screen.width < 800){
      this.sidenav.mode = 'over'
      this.sidenav.close()
    }
  }
}


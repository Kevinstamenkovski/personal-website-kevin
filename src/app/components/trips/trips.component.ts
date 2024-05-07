import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  selectedSection: string = 'Berlin'
  buttonStatus: boolean = false
  constructor() { }

  ngOnInit(): void {
    this.reveal()
  }
  reveal():void{
    let reveals = document.querySelectorAll('.reveal')
    console.table(reveals)
    reveals.forEach((reveals) => {
      let windowHeigh = window.innerHeight
      let topElement = reveals.getBoundingClientRect().top
      let visibleElement = 100

      if(topElement < windowHeigh - visibleElement){
        reveals.classList.add('active')
      }else{
        reveals.classList.remove('active')
      }
    })

  }

}


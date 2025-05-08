import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  selectedSection: string = 'Berlin';
  buttonStatus: boolean = false;

  berlinData = [
    {
      img: '../../../assets/berlin_brandenburg_gate.jpeg',
      alt: 'Brandenburg Gate',
      title: 'Brandenburg Gate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    },
    {
      img: '../../../assets/berlin_victory_column.jpeg',
      alt: 'Victory Column',
      title: 'Victory Column',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    },
    {
      img: '../../../assets/berlin_memorial.jpeg',
      alt: 'Berlin\'s Memorial',
      title: 'Berlin\'s Memorial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    },
    {
      img: '../../../assets/berlin_wall.jpeg',
      alt: 'Berlin\'s Wall',
      title: 'Berlin\'s Wall',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    }
  ];

  berovoData = [
    {
      img: '../../../assets/berovo_hotel_manastir.jpg',
      alt: 'Hotel Manastir',
      title: 'Hotel Manastir',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    },
    // Add more data as needed
  ];

  pehcevoData = [
    {
      img: '../../../assets/pehcevo_diabolik_dol.jpg',
      alt: 'Diabolik Dol',
      title: 'Diabolik Dol',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
    },
    // Add more data as needed
  ];

  constructor() { }

  ngOnInit(): void {
    this.reveal();
  }

  toggleArrow(): void {
    this.buttonStatus = !this.buttonStatus;
  }

  reveal(): void {
    let reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => {
      let windowHeight = window.innerHeight;
      let topElement = reveal.getBoundingClientRect().top;
      let visibleElement = 100;

      if (topElement < windowHeight - visibleElement) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    });
  }
}

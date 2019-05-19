import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images:any;
  constructor() { }

  ngOnInit() {
    this.images = [1, 2, 3].map(() => `https://picsum.photos/1400/600?random&t=${Math.random()}`); //images[1], images[2]... (.photos/width/height)
  }

}

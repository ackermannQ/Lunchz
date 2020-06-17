import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodspot-image',
  templateUrl: './foodspot-image.component.html',
  styleUrls: ['./foodspot-image.component.css']
})
export class FoodspotImageComponent implements OnInit {

  profileImage = '../assets/images/galleria1.jpg';

  images: [
    {
        source: 'demo/galleria1.jpg', title: 'image1'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

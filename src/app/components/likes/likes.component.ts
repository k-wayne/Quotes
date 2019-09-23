import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  upperClick: number = 0;
  lowerClick: number = 0

  likeButtonClick() {
    this.upperClick++;
  }

  dislikeButtonClick() {
    this.lowerClick++;
  }


    constructor() { }

    ngOnInit() {
    }

  }

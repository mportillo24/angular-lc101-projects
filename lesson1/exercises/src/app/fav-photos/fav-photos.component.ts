import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.servedfromscratch.com/wp-content/uploads/2018/10/IMG_2414.jpg';
  image2 = 'https://data2.thefeedfeed.com/static/2019/02/25/15511105485c741194c56ba.jpg';
  image3 = 'https://www.101dogbreeds.com/wp-content/uploads/2015/07/Jack-Chi.jpg';
  image4 = 'https://media1.giphy.com/media/zOvBKUUEERdNm/giphy.gif';

  constructor() { }

  ngOnInit() {
  }

}
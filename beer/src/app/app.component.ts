import { Component, OnInit } from '@angular/core';
import { BeerService } from './service/beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'beer';

  posts: any;

  constructor(private service: BeerService) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})

export class AsteroidsComponent implements OnInit {
  title = 'List of Asteroids';
  searchText: string;
  public response;
  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit() {
    this.nasaApiService.getList()
      .subscribe(data => this.response = data);
  }

}



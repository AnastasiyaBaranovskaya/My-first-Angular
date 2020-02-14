import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { AsteroidsComponent } from '../asteroids/asteroids.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor (){
  }
  // onSelect(asteroid: Asteroid): void {
  //   this.selectedAsteroid = asteroid;
  // }
}

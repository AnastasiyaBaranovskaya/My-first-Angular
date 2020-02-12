import { Component, OnInit } from '@angular/core';
import { Asteroid } from '../asteroid';
import { ASTEROIDS } from '../mock-asteroids';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit {

  asteroids = ASTEROIDS;

  asteroid: Asteroid = {
    id: 1,
    name: 'Ceres'
  }

  selectedAsteroid: Asteroid;

  constructor() { }

  ngOnInit() {
  }

  onSelect(asteroid: Asteroid): void {
    this.selectedAsteroid = asteroid;
  }

}

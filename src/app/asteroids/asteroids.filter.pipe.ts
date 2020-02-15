import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class AsteroidsFilterPipe implements PipeTransform{
  transform(asteroids : Asteroid[], searchTerm: string): Asteroid[]{
    if (!asteroids || !searchTerm){
      return asteroids;
    }
    return asteroids.filter(asteroid => asteroid.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
  }
}

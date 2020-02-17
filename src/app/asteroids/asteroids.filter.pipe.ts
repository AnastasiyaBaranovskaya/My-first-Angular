import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class AsteroidsFilterPipe implements PipeTransform {

  transform(asteroids: [{name: ''}], searchTerm: string) {
    if (!asteroids || !searchTerm) {
      return asteroids;
    }
    return asteroids.filter(asteroid => asteroid.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}

import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})

export class AsteroidsComponent  implements OnInit {
  title = 'List of Asteroids';
  public response;
  constructor (private newServiceService: NewServiceService){};

  ngOnInit(){
    this.newServiceService.getList()
    .subscribe(data => this.response = data);

  }

}



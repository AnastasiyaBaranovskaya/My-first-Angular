import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})

export class AsteroidsComponent  {
  title = 'List of Asteroids';
  response: any;
  constructor (private http: HttpClient){
  }
  
  search (){
   this.http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=D0Bmcl1rnb6rGbEt0eb7BcnbNcXHBNFgcon6Fu8F')
    .subscribe((response)=>{
      this.response = response;
    })
  }
}



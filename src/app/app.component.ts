import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List of Asteroids';
  userName: string ='';
  response: any;

  constructor (private http: HttpClient){

  }
  search (){
    this.http.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY')
    .subscribe((response)=>{
      this.response = response;
      console.log(response);
    })
  }
}

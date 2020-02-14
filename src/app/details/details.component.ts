import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewServiceService } from '../new-service.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  ngOnInit(): void {
  }
  title = 'List of Asteroids';
  response: any;
  constructor (
    private http: HttpClient,
    private router: ActivatedRoute,
    private router: Router,
    ){}

  search (){
   this.http.get('https://api.nasa.gov/neo/rest/v1/neo/{{}}?api_key=D0Bmcl1rnb6rGbEt0eb7BcnbNcXHBNFgcon6Fu8F')
    .subscribe((response)=>{
      this.response = response;
      console.log(response)
    })
  }
}

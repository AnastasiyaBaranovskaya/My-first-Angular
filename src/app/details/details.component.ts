import { Component, OnInit } from '@angular/core';
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
  id: string;

  constructor (
    private http: HttpClient,
    private route: ActivatedRoute
    ){
      this.id = this.route.snapshot.params['id'];
      this.route.params.subscribe(params => {this.id = params['id']});
    }
    fullUrl = 'https://api.nasa.gov/neo/rest/v1/neo/'+ this.id + '?api_key=D0Bmcl1rnb6rGbEt0eb7BcnbNcXHBNFgcon6Fu8F';

  search (){
   this.http.get(this.fullUrl)
    .subscribe((response)=>{
      this.response = response;
    })
  }
}

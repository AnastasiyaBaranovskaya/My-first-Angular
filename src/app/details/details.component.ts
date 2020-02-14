import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  {

  response: any;
  id: string;

  constructor (private http: HttpClient, private route: ActivatedRoute){
      this.id = this.route.snapshot.params['id'];
    }
  search (){
    const fullUrl = `https://api.nasa.gov/neo/rest/v1/neo/${this.id}?api_key=D0Bmcl1rnb6rGbEt0eb7BcnbNcXHBNFgcon6Fu8F`;
   this.http.get(fullUrl)
    .subscribe((response)=>{
      this.response = response;
    })
  }
}

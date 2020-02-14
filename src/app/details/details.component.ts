import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../new-service.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string;

  public response;
  constructor (
    private route: ActivatedRoute,
    private newServiceService: NewServiceService
    ){
      this.id = this.route.snapshot.params['id'];
    };

  ngOnInit(){
    this.newServiceService.search(this.id)
    .subscribe(data => this.response = data);
  }
}

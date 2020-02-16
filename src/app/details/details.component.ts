import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string;

  public response;
  constructor(
    private route: ActivatedRoute,
    private nasaApiService: NasaApiService
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.nasaApiService.search(this.id)
      .subscribe(data => this.response = data);
  }
}

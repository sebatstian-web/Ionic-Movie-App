import { Component, OnInit, Input } from '@angular/core';

import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() id: string;

  constructor(private apis: ApisService) {}

  ngOnInit() {
    console.log(this.id);
    this.apis.getMovieDetailService(this.id).subscribe(console.log);
    this.apis.getMovieActorsService(this.id).subscribe(console.log);
  }
}

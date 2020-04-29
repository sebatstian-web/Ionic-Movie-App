import { Component, OnInit } from '@angular/core';

import { ApisService } from '../services/apis.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(private apis: ApisService) {}

  ngOnInit() {
    this.apis.getFeatureService().subscribe(console.log);
  }
}

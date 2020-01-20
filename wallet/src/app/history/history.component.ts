import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { User } from '../user';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  userDetails = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getData().subscribe(data => this.userDetails = data);
  }

}

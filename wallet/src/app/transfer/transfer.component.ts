import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ServiceService } from '../service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  user = {
    amount: null,
    name : '',
    accountNumber: null,
    ifscCode: '',
    date : ''
  }
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getData().subscribe(data => console.log(data));
  }
  sendMoney(){
    confirm("Are sure tto proceethis transaction");
    this.service.addUser(this.user);
    this.router.navigate(['/dashboard']);
  }

}

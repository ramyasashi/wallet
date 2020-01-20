import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  totalBalance: number;
  flag: boolean;
  constructor(private authService: AuthService, public router: Router) {
    this.flag = false;
  }

  ngOnInit() {
  }
  totalMoney(){
    this.flag = !this.flag;
    this.totalBalance = 3000;
  }
  logoutFun(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
  routingFun(){
    this.router.navigate(['/dashboard']);
  }
  openNav(){
    document.getElementById("sidenav").style.width = "250px";
  }
  closeNav(){
    document.getElementById("sidenav").style.width = "0";
  }
 
}

import { Component, OnInit, Output } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  profileData : any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getProfileData().subscribe(data => {
      console.log("myprofileComponent",data);
      this.profileData = data
    });
  }

}

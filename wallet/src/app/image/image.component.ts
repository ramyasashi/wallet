import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormArray, Validators } from "@angular/forms";
import { ServiceService } from '../service.service';
import { ProfileUser } from '../profileUser';
import { MyProfileComponent } from '../my-profile/my-profile.component';

@Component({
  providers: [MyProfileComponent],
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  submitted: boolean;
  // @Input() userProfile: any;
  imageUrl: any;

  userProfile : any;	
  user: ProfileUser;
  // imageUrl: any = "/assets/images/index.png";
  constructor(public fb: FormBuilder, private cd: ChangeDetectorRef,
    private service:ServiceService, private myProfileComponent: MyProfileComponent) {
    // console.log("userProfile",this.userProfile);
    // this.imageUrl = this.userProfile.imageUrl;
    // this.imageUrl = myProfileComponent.profileData.imageUrl;
  }


  ngOnInit() {
    this.service.getProfileData().subscribe(data=> {
      console.log("profile",data);
      console.log(typeof(data));
      this.userProfile = data;
      this.imageUrl = this.userProfile[0].imageUrl;
      // console.log("userProfile", this.userProfile[0].imageUrl);
    })
  }
  /*##################### Registration Form #####################*/
  registrationForm = this.fb.group({
    file: [null]
  })  

    /*########################## File Upload ########################*/
    @ViewChild('fileInput', {static: false}) el: ElementRef;
    // imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    // imageUrl = this.userProfile.imageUrl;
    // editFile: boolean = true;
    // removeUpload: boolean = false;

    uploadFile(event) {
      let reader = new FileReader(); // HTML5 FileReader API
      let file = event.target.files[0];
      if (event.target.files && event.target.files[0]) {
        reader.readAsDataURL(file);
  
        // When file uploads set it to file formcontrol
        reader.onload = () => {
          this.imageUrl = reader.result;
          this.registrationForm.patchValue({
            file: reader.result
          });
          
          this.user = {
            id : this.userProfile[0].id,
            name : this.userProfile[0].name,
            mobileNumber: this.userProfile[0].mobileNumber,
            email: this.userProfile[0].email,
            imageUrl : this.imageUrl
          }
          console.log("a",this.user);
          this.service.update(this.user);
        }
        // ChangeDetectorRef since file is loading outside the zone
        this.cd.markForCheck();        
      }
    }
  
  
}

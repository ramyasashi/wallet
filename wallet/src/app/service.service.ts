import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { ProfileUser } from './profileUser';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  user : Observable<User[]>;
  usersCollection: AngularFirestoreCollection<User>
  itemDocument: AngularFirestoreDocument<User>
  currentDate : string;
  // url = 'http://localhost:3000/users';

  profileCollection: AngularFirestoreCollection<User>
  profileUser : Observable<ProfileUser>
  id: string;
  constructor(private http: HttpClient, public db: AngularFirestore) {
    this.usersCollection = this.db.collection('userDetails');
    console.log("database",this.usersCollection);
    this.profileCollection = this.db.collection('profileDetails');
    console.log("profile",this.profileCollection);
  }

  getData() {
    return this.db.collection('userDetails').valueChanges();
  }
  getProfileData(){
    return this.db.collection('profileDetails').valueChanges();
  }
  addUser(user: User) {
    const documentId = this.db.createId();
    this.currentDate = Date();
    this.usersCollection.doc(documentId).set({name:user.name, accountNumber:user.accountNumber, ifscCode:user.ifscCode, amount:user.amount, id:documentId, date:this.currentDate});
  }
  update(data1: ProfileUser){
    this.id = data1.id;
    this.profileCollection.doc(this.id).delete();
    this.profileCollection.doc(this.id).set({name:data1.name, mobileNumber:data1.mobileNumber, email: data1.email, imageUrl: data1.imageUrl,id: this.id,});
  }
  // postUser(userObject: User){
  //   return this.http.post(this.url, userObject)
  // }
}

import { Component, OnInit } from '@angular/core';
import { userModel } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    userModel: userModel;

  constructor() {
      //initialize empty array
      this.userModel = <userModel>{};
   }

  ngOnInit() {
  }

  registerUser(f){
    console.log(f);
    // this.userModel.age = f.userAge.value;    
    // this.userModel.gender = f.userGender.value
    // this.userModel.name = f.userName.value
    // this.userModel.cellphone = f.userCellphone.value

    console.log(this.userModel);


  }
}

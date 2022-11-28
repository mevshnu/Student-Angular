import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

name=""
rollno=""
addmissionNo=""
mobile=""
college=""
parentName=""
parentNumber=""
userName=""
password=""

eventEntry=()=>
{
  let data:any={
    "name":this.name,
    "rollno":this.rollno,
    "addmissionNo":this.addmissionNo,
    "mobile":this.mobile,
    "college":this.college,
    "parentName":this.parentName,
    "parentNumber":this.parentNumber,
    "userName":this.userName,
    "password":this.password
  }
  console.log(data)
}

}

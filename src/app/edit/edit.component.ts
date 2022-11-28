import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  addmissionNo=""
  eventEdit=()=>
{
  let data3:any={
   
    "addmissionNo":this.addmissionNo,
   
    
  }
  console.log(data3)
}
}

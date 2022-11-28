import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  addmissionNo=""
  eventDelete=()=>
{
  let data2:any={
   
    "addmissionNo":this.addmissionNo,
   
    
  }
  console.log(data2)
}
}

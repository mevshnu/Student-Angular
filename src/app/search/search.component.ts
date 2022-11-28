import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  addmissionNo=""
  eventSearch=()=>
{
  let data4:any={
   
    "addmissionNo":this.addmissionNo,
   
    
  }
  console.log(data4)
}
}


import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Models } from '../models';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    }

  
  models: Models =new Models();
  constructor(private contacService:ContactService){

  }
  contactus() {

  console.log(this.models);
return this.contacService.contactuser(this.models).subscribe(
  {
    next:(data) => {

      alert("thankyou");
    },

    error:(error) =>{

      alert("please repeat again");
    }
    
    
  }
);

  };

}

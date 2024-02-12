
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Models } from '../models';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent {
data: any;
models: Models =new Models();
constructor(private adminservice : AdminService){}
contact() {
  console.log(this.data)
  
return this.adminservice.contactuser(this.models).subscribe(

  (response: any) => { // Utilisez le paramètre response pour accéder aux données de la réponse HTTP
    this.data = response; // Assignez les données récupérées à la variable data
    console.log(this.data); // Affichez les données dans la console
    this.data = response;

    alert("thank you");
  },
  
  

    (error) => {

      alert("please repeat again");
    }

  

  );}
  
}

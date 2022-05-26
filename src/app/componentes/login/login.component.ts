
import { Component, Input, OnInit } from '@angular/core';


import { GlobalConstant } from '../../GlobalConstant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {
  usuario:string="";
  password:string="";
 

  constructor(public router: Router){}

  ngOnInit(): void {
  }


  OnSubmit()
{


  if (this.usuario==="ARGENTINA" && this.password ==="PROGRAMA")
    {
            
        GlobalConstant.valida=!GlobalConstant.valida
        //RouterLink.toString()g
        
        //console.log(GlobalConstant.valida)
        alert("Ha entrado en modo de edición");
        this.router.navigate(["/"]);
    
    }
 //console.log(this.usuario);
 //console.log(this.password);
}
}


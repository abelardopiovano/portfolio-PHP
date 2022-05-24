import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../servicios/persona.service';
import { HttpHeaders} from '@angular/common/http';
import { GlobalConstant } from '../../GlobalConstant';



const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
  }


  

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  valida2=GlobalConstant.valida
  persona={id:0, nombre:"", descripcion:"",url_cv:""}
  //data:any;
  //persona={id:1, nombre:"n1",descripcion:"d1",url_cv:"w1"}
  
  
  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {

    this.personaService.getPersona().subscribe( data=>{
      
      GlobalConstant.id=1;
      this.persona=(data[GlobalConstant.id-1]);
      //console.log(data[GlobalConstant.id-1]);
      
      
      
  });

  

  }

 

}

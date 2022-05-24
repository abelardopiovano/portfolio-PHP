import { Component, OnInit,inject, Output, Input } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { PersonaService } from '../../servicios/persona.service';
import { NgForm } from '@angular/forms';
import { Persona} from '../../modelos/persona';
import { __importDefault } from 'tslib';
import { Router } from '@angular/router';
import { GlobalConstant } from 'src/app/GlobalConstant';



const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
  }

  
@Component({
  selector: 'app-edita-persona',
  templateUrl: './edita-persona.component.html',
  styleUrls: ['./edita-persona.component.css']
})
export class EditaPersonaComponent implements OnInit {
  
  persona={id:0, nombre:"", descripcion:"",url_cv:""}
  


  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }
  
  ngOnInit(): void {
    GlobalConstant.id=1;
    this.personaService.getPersona().subscribe( data=>{
      //console.log(data);
      
      this.persona=data[GlobalConstant.id-1];
      //this.dato=data;
      GlobalConstant.data=data;
    //console.log(GlobalConstant.data)
  });

}
  
   
  

  modificaPersona(formulario:NgForm)
  {
    //persona.id=GlobalConstant.id;
    GlobalConstant.data[GlobalConstant.id-1]=formulario.value
    //console.log(GlobalConstant.data[GlobalConstant.id-1])
    //this.dato=formulario.value;
    //console.log(this.dato[GlobalConstant.id-1])
   //this.persona=formulario.value
   //console.log(GlobalConstant.data)
  
    //console.log(data[GlobalConstant.id-1]);
    //console.log(this.persona)
   //console.log(this.data[GlobalConstant.id-1]);
  //persona[GlobalConstant.id-1]=formulario.value;
  //this.personaService.putPersonas(formulario.value).subscribe();
  this.personaService.putPersonas(GlobalConstant.data[GlobalConstant.id-1]).subscribe();
  this.router.navigate(['/']);
  
  }

 
  
  
}

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
    this.personaService.getPersona().subscribe( data=>{
      //console.log(data);
      this.persona=data;
      
  });

}
  
   
  

  modificaPersona(formulario:NgForm)
  {
  
  this.personaService.putPersonas(formulario.value).subscribe();
  this.router.navigate(['/']);
  }

 
  
  
}

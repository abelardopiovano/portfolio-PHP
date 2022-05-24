import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../servicios/persona.service';
import { Router } from '@angular/router';
import { GlobalConstant } from '../../GlobalConstant';


const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
  }

@Component({
  selector: 'app-agrega-experiencia',
  templateUrl: './agrega-experiencia.component.html',
  styleUrls: ['./agrega-experiencia.component.css']
})
export class AgregaExperienciaComponent implements OnInit {
  ExperienciaList:any;
  
  experiencia={id:0, nombre_empresa:"", cargo:"",descripcion:"",persona_id:0};
  
  



  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    
    

    this.personaService.getExperiencia().subscribe( data=>{
      
      this.experiencia.id=GlobalConstant.max;
      this.experiencia.persona_id=GlobalConstant.id;
      
    });

    
  }




  agregaExperiencia(formulario:NgForm)
  {
  this.experiencia=formulario.value;
  //this.experiencia.id=0;
  this.experiencia.id=GlobalConstant.max;
  this.experiencia.persona_id=GlobalConstant.id;
  //console.log(this.experiencia)
  //console.log(formulario.value)
  //console.log(GlobalConstant.id)
  //this.personaService.putExperiencia(formulario.value).subscribe();
  this.personaService.postExperiencia(formulario.value).subscribe();
  this.router.navigate(['/experiencia']);


  }
}

import { Component, OnInit } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { PersonaService } from '../../servicios/persona.service';
import { GlobalConstant } from '../../GlobalConstant';
import { NgForm } from '@angular/forms';


  const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
  }

@Component({
  selector: 'app-agrega-proyecto',
  templateUrl: './agrega-proyecto.component.html',
  styleUrls: ['./agrega-proyecto.component.css']
})
export class AgregaProyectoComponent implements OnInit {

  ExperienciaList:any;
  
  proyecto={id:0, url_imagen:"", nombre_proyecto:"",descripcion:"",url_proyecto:"",persona_id:0};

  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {

    this.personaService.getProyecto().subscribe( data=>{
      
      this.proyecto.id=GlobalConstant.max;
      this.proyecto.persona_id=GlobalConstant.id;
      
    });



  }

  agregaProyecto(formulario:NgForm)
  {
  this.proyecto=formulario.value;
  //this.experiencia.id=0;
  this.proyecto.id=GlobalConstant.max;
  this.proyecto.persona_id=GlobalConstant.id;
  //console.log(this.experiencia)
  //console.log(formulario.value)
  //console.log(GlobalConstant.id)
  //this.personaService.putExperiencia(formulario.value).subscribe();
  this.personaService.postProyecto(formulario.value).subscribe();
  this.router.navigate(['/proyectos']);


  }




}

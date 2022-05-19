import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../servicios/persona.service';
import { Router } from '@angular/router';
import { GlobalConstant } from '../../GlobalConstant';
import { ThisReceiver } from '@angular/compiler';
import { throwError } from 'rxjs';

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
  
  experiencia={id:0, nombreEmpresa:"", cargo:"",descripcion:"",persona_id:0};
  
  



  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    
    //this.personaService.getPersonas().subscribe( data=>{
      //this.persona={id:1, nombre:"n1",descripcion:"d1",url_cv:"w1"}
      //data=data.stringify
      //this.persona=data
      //Number(this.experiencia.id=GlobalConstant.max)+1;
      //this.experiencia.persona_id=Number(this.persona.id);
      //this.experiencia.persona_id=(this.persona.id);
      //console.log(this.persona)
      //console.log(data)
      //console.log(this.experiencia.id)

    //});

    this.personaService.getExperiencia().subscribe( data=>{
      //console.log(data)
      this.experiencia.id=GlobalConstant.max;
      this.experiencia.persona_id=GlobalConstant.id;
      //this.experiencia.persona_id=Number(this.persona.id);
      //Number(this.experiencia.id)
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

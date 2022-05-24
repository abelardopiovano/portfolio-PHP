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
  selector: 'app-agrega-educacion',
  templateUrl: './agrega-educacion.component.html',
  styleUrls: ['./agrega-educacion.component.css']
})
export class AgregaEducacionComponent implements OnInit {
  EducacionList:any;
  
  educacion={id:0, nombre_inst:"", titulo:"",descripcion:"",persona_id:0};
  constructor(
    public router: Router,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {

    this.personaService.getEducacion().subscribe( data=>{
      
      this.educacion.id=GlobalConstant.max;
      this.educacion.persona_id=GlobalConstant.id;
     
    });



  }

  agregaEducacion(formulario:NgForm)
  {
  this.educacion=formulario.value;

  this.educacion.id=GlobalConstant.max;
  this.educacion.persona_id=GlobalConstant.id;
 
  this.personaService.postEducacion(formulario.value).subscribe();
  this.router.navigate(['/educacion']);


  }




}
